# Backend autogestionable para la landing de 4Peeq — Plan por sprints

> **Documento vivo.** Marcá cada tarea con `[x]` a medida que avanzás. Cada sprint es chico y
> autocontenido: se puede ejecutar, verificar y desplegar de a uno. Al terminar el **Sprint 1** este
> mismo documento se copia al repo como `PROGRESS.md` para que viva junto al código.

## Contexto

Hoy la landing de 4Peeq (`c:\...\4peeq\4peeq`) es un sitio **HTML/CSS/JS estático puro**, sin
framework ni build. **Todo el contenido está hardcodeado** en el HTML (textos, íconos SVG inline,
imágenes). El nav y el footer están **duplicados idénticos** en cada página. Los únicos datos ya
"estructurados" son los eventos del Club (array `EVENTOS` en [app.js:429](app.js#L429)).

Santiago es hoy la única persona que puede tocar la página. El objetivo: que **cada área pueda editar
sus propios textos, íconos e imágenes** sin tocar código, con **usuarios admin y roles por módulo**.
En particular, **Academy** debe mostrar "cursos/inscripciones abiertas" como cards que las
responsables publican/editan/borran ellas mismas (la inscripción online desde la web queda para más
adelante).

**Decisiones tomadas:**
- **Migrar a Next.js** (App Router, render en servidor → conserva SEO).
- **Todo el sitio editable** vía CMS.
- **Stack gratis / open-source, self-hosteado en la VPS propia** (sin Vercel ni Supabase).
- **Academy = mostrar cards** de cursos abiertos (inscripción online = epic futuro).

## Stack

**Next.js (App Router, TypeScript) + Payload CMS 3 + Postgres**, todo dockerizado en la **VPS**.

- **Payload CMS 3** se instala *dentro* del mismo proyecto Next (mismo repo, mismo deploy). Da panel
  `/admin` pulido apto para no técnicos, **auth/usuarios/roles integrados** y **control de acceso por
  rol a nivel colección y campo** → mapea 1:1 con "roles por módulo". Gratis, MIT, self-hosteable.
- **Postgres** en la misma VPS (adaptador `@payloadcms/db-postgres`).
- **Docker Compose**: servicios `app` (Next+Payload), `db` (Postgres), `caddy` (reverse proxy con
  HTTPS automático). Backups de Postgres programados.

**Por qué VPS y no Vercel:** Payload corre mejor con un proceso Node siempre vivo (los cold starts de
serverless lo perjudican). Para una landing con editores internos, un VPS modesto sobra; la
escalabilidad se resuelve vertical si algún día hace falta. Costo fijo, sin lock-in, backups propios.

## Modelado de contenido (referencia)

- **Globals (singletons)** para páginas únicas: `HomePage`, `AcademyPage`, `ConsultoriaPage`,
  `PeoplePage`, `TechPage`, `MakersPage`, `Nav`, `Footer`.
- **Collections (repetibles)**: `Courses` (Academy), `ClubEvents` (migra `EVENTOS`),
  `PymetonEditions`, `TeamMembers`, `Clients`, `Testimonials`, `Media` (uploads), `Users`.
- **Íconos**: campo `select` de un set curado de SVGs ya usados + opción de subir imagen.

---

# EPIC A — Infraestructura y scaffold

## Sprint 0 — Preparar la VPS
- [ ] Instalar Docker + Docker Compose en la VPS.
- [ ] Apuntar el dominio/subdominio (ej: `admin`/`www`) a la IP de la VPS.
- [ ] Configurar firewall (solo 80/443/SSH) y acceso SSH por clave.
- [ ] Definir dónde vivirán los volúmenes de datos (Postgres, media, backups).
- **Verificación:** `docker run hello-world` OK; el dominio resuelve a la VPS.

## Sprint 1 — Scaffold Next.js + Payload (dev local)
- [x] Crear proyecto Next.js (App Router, TS) con Payload 3 y `@payloadcms/db-postgres`. (carpeta `web-next/`)
- [x] Levantar Postgres local (docker) y configurar `.env` (`DATABASE_URI`, `PAYLOAD_SECRET`).
- [x] Confirmar `/admin` carga (200) y `/admin/create-first-user` responde — falta que un humano complete el form y cree el usuario real.
- [x] Copiar este plan al repo como `PROGRESS.md` (tracker vivo junto al código).
- **Verificación:** `next dev` levanta; `/admin` funciona; falta crear el usuario y loguearse manualmente (paso de UI, ver abajo).

## Sprint 2 — Dockerizar y desplegar esqueleto a la VPS
- [x] `Dockerfile` de producción para la app Next+Payload.
- [x] `docker-compose.yml` con `app` + `db` (Postgres) + `caddy` (HTTPS automático).
- [ ] Deploy del esqueleto vacío a la VPS; `/admin` accesible por HTTPS en el dominio.
- [x] Script de **backup** de Postgres (cron/volumen) + probar un restore.
- **Verificación:** el sitio esqueleto responde por HTTPS; backup genera dump y restore funciona.

---

# EPIC B — Migrar el sitio estático a Next.js (paridad visual, SIN CMS todavía)

> Objetivo del epic: **misma pinta y mismas animaciones** que hoy, pero sobre Next. Se de-riskean las
> animaciones antes de tocar contenido. El contenido sigue hardcodeado en JSX en esta etapa.

## Sprint 3 — Base de estilos + layout compartido
- [x] Importar `styles.css` como CSS global (sin modificarlo). Portar fonts/favicons/meta.
- [x] Copiar `assets/` y `public/` al proyecto Next.
- [x] Crear **root layout** con el nav + footer compartidos (plantilla: nav
  [academy.html:22-73](academy.html#L22), footer [academy.html:171-207](academy.html#L171)).
- **Verificación:** una página vacía muestra nav+footer idénticos al sitio actual.

## Sprint 4 — Portar las animaciones de `app.js`
- [x] Client component que corre la lógica de `app.js` (scroll nav, menú mobile, IntersectionObserver
  reveal, parallax/spotlight, contadores) sobre el mismo markup.
- [x] Verificar cada efecto en una página de prueba.
- **Verificación:** reveal, parallax, menú mobile y contadores se comportan igual que hoy.

## Sprint 5 — Migrar Home (`index.html`)
- [x] Portar hero, stats, servicios, proceso, clientes, equipo, CTA final — markup 1:1.
- **Verificación:** `/` es visualmente indistinguible del `index.html` actual (incluida animación).

## Sprint 6 — Migrar páginas de servicio
- [x] `academy.html` → `/academy`
- [x] `consultoria.html` → `/consultoria`
- [x] `people.html` → `/people`
- [x] `tech.html` → `/tech`
- [x] `makers.html` → `/makers`
- **Verificación:** cada ruta coincide 1:1 con su `.html`.

## Sprint 7 — Migrar Club (calendario scrollytelling) + Pymeton
- [x] `/club` con el calendario scrollytelling (por ahora el array `EVENTOS` sigue hardcodeado).
- [x] `/pymeton` con sus ediciones/capítulos hardcodeados.
- **Verificación:** el scrollytelling (rail, furgoneta, cuenta regresiva) funciona igual.

## Sprint 8 — Migrar páginas restantes + paridad de URLs
- [x] `lo-que-hacemos`, `postulate`, `nuestrapropuesta`/`propuesta`, sub-páginas de `club`.
- [x] Replicar `cleanUrls` y redirects para no romper links existentes (`/club`, `/pymeton`, etc.).
- **Verificación:** todas las URLs actuales siguen funcionando; nada tira 404.

## Sprint 9 — QA de paridad + salir a producción
- [ ] Recorrido completo comparando cada página contra el sitio actual (visual + interacción + mobile).
- [ ] Chequear meta tags / OG / favicons / performance.
- [ ] **Cutover**: la VPS Next reemplaza al sitio estático en el dominio productivo.
- **Verificación:** producción sirve el sitio Next; sin regresiones reportadas.

---

# EPIC C — Fundaciones del CMS

## Sprint 10 — Media + Users base
- [x] Collection `Media` (uploads) e importar imágenes actuales de `assets/`/`public/`.
- [x] Collection `Users` con campo `role`/`modules` (todavía sin restricciones finas).
- **Verificación:** se sube una imagen en `/admin` y se referencia desde una página.

## Sprint 11 — PILOTO: Academy editable + cards de cursos ⭐
- [x] Global `AcademyPage` (hero, "Qué incluye", proceso, CTA) — ver estructura en
  [academy.html:77-169](academy.html#L77).
- [x] Collection `Courses`: título, descripción, fechas, cupos, estado (abierto/cerrado), imagen/ícono,
  link (WhatsApp/form).
- [x] `/academy` pasa a renderizar desde Payload (`payload.find`): textos del Global + grilla de
  **cards de cursos abiertos** (reusa estilos `.areas-grid`/`.area-card`).
- [x] Cargar los cursos reales.
- **Verificación:** crear/editar/borrar un curso en `/admin` se refleja en `/academy`; editar un texto
  del Global también. (Este es el pedido central del usuario.)

## Sprint 12 — Icon picker + campo de imagen reutilizable
- [x] Set curado de SVGs (los ya usados en el sitio) como opciones seleccionables.
- [x] Componente de campo reutilizable ícono/imagen para todas las colecciones.
- **Verificación:** una editora cambia el ícono de una card desde `/admin` sin tocar código.

---

# EPIC D — Llevar el resto del contenido al CMS

## Sprint 13 — Home editable
- [ ] Global `HomePage` (hero, stats, servicios, proceso, equipo, CTA) + render desde Payload.
- **Verificación:** editar el hero/stats en `/admin` se ve en `/`.

## Sprint 14 — Club events al CMS
- [ ] Collection `ClubEvents` migrando el array `EVENTOS` ([app.js:429](app.js#L429)).
- [ ] El calendario scrollytelling lee de la DB; cuenta regresiva se recalcula sola.
- **Verificación:** agregar/editar un evento en `/admin` actualiza el calendario y la cuenta regresiva.

## Sprint 15 — Páginas de servicio editables
- [ ] Globals `ConsultoriaPage`, `PeoplePage`, `TechPage`, `MakersPage` + render.
- **Verificación:** cada página se edita desde `/admin`.

## Sprint 16 — Pymeton editable
- [ ] Collection `PymetonEditions` (ediciones + capítulos/videos) + render en `/pymeton`.
- **Verificación:** agregar una edición nueva desde `/admin` aparece en la página.

## Sprint 17 — Equipo / Clientes / Testimonios
- [ ] Collections `TeamMembers`, `Clients`, `Testimonials` + render donde correspondan (home, etc.).
- **Verificación:** editar el equipo/clientes desde `/admin` se refleja en el sitio.

## Sprint 18 — Nav y Footer editables
- [ ] Globals `Nav` y `Footer` (links, CTA, contacto, redes) + render en el layout.
- **Verificación:** cambiar un link del nav/footer desde `/admin` se aplica en todo el sitio.

---

# EPIC E — Roles por módulo, permisos y onboarding

## Sprint 19 — Roles y control de acceso
- [ ] Definir roles/módulos exactos (ej: `admin`, `academy`, `club`, `contenido-general`).
- [ ] `access` por colección/global según rol (ej: rol `academy` solo edita `AcademyPage` + `Courses`).
- **Verificación:** un usuario `academy` **solo** ve/edita Academy; un `admin` ve todo.

## Sprint 20 — Usuarios reales + prueba de aislamiento
- [ ] Crear los usuarios de cada área con su rol.
- [ ] Probar que cada uno solo puede tocar lo suyo.
- **Verificación:** login por rol confirma el aislamiento esperado.

## Sprint 21 — Onboarding + hardening
- [ ] Guía corta de uso del panel `/admin` para las editoras.
- [ ] Hardening: rate limit, verificación de backups, logs/monitoreo básico, updates de Payload/Next.
- **Verificación:** una editora hace un cambio real end-to-end guiándose solo por la guía.

---

# EPIC F — (Futuro) Inscripción online desde la web

> Fuera del alcance actual. Cuando se decida: formulario de inscripción en Academy, captura de anotados
> en una collection `Enrollments`, notificaciones y export de leads. Se planificará como epic aparte.

---

## Decisiones pendientes para arrancar
- [ ] Specs de la VPS (CPU/RAM/disco) y usuario/acceso para desplegar.
- [ ] Dominio/subdominio definitivo para el panel `/admin`.
- [ ] Set inicial de roles/módulos y qué persona maneja cada uno.
- [ ] Qué hacer con el form `postulate.html` (hoy no envía datos): ¿conectarlo a email/DB o dejarlo igual?
