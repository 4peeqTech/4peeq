import React from 'react'

export default function PostulatePage() {
  return (
    <>
      {/* HERO */}
<section className="svc-hero">
  <div className="svc-hero-glow"></div>
  <div className="wrap">
    <nav className="breadcrumb" aria-label="Miga de pan">
      <a href="lo-que-hacemos.html">Lo que hacemos</a>
      <span aria-hidden="true">/</span>
      <a href="people.html">People</a>
      <span aria-hidden="true">/</span>
      <span>Postulate</span>
    </nav>
    <span className="svc-tag-hero">SUMATE AL EQUIPO</span>
    <h1>Queremos conocerte.</h1>
    <p className="svc-hero-lead">Completá el formulario y te sumamos a nuestra base de talentos o te postulamos a una búsqueda activa. Sin vueltas.</p>
  </div>
</section>

{/* WIZARD */}
<section className="svc-block svc-body">
  <div className="wrap">

    {/* STEPPER */}
    <div className="wiz-stepper" aria-label="Progreso del formulario">
      <div className="wiz-row">

        <div className="wiz-node wiz-active" data-i="0">
          <div className="wiz-badge">
            <span className="wiz-num">1</span>
            <svg className="wiz-check" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="3 8 6.5 12 13 4"/></svg>
          </div>
          <span className="wiz-lbl">Datos</span>
        </div>

        <div className="wiz-track" data-i="0"><div className="wiz-fill"></div></div>

        <div className="wiz-node" data-i="1">
          <div className="wiz-badge">
            <span className="wiz-num">2</span>
            <svg className="wiz-check" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="3 8 6.5 12 13 4"/></svg>
          </div>
          <span className="wiz-lbl">Perfil</span>
        </div>

        <div className="wiz-track" data-i="1"><div className="wiz-fill"></div></div>

        <div className="wiz-node" data-i="2">
          <div className="wiz-badge">
            <span className="wiz-num">3</span>
            <svg className="wiz-check" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="3 8 6.5 12 13 4"/></svg>
          </div>
          <span className="wiz-lbl">Búsquedas</span>
        </div>

        <div className="wiz-track" data-i="2"><div className="wiz-fill"></div></div>

        <div className="wiz-node" data-i="3">
          <div className="wiz-badge">
            <span className="wiz-num">4</span>
            <svg className="wiz-check" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="3 8 6.5 12 13 4"/></svg>
          </div>
          <span className="wiz-lbl">Cierre</span>
        </div>

      </div>
    </div>

    {/* STEPS CONTAINER */}
    <div className="wiz-body" id="wiz-body">

      {/* PASO 1 */}
      <div className="form-step wiz-active" id="step-0" role="group" aria-labelledby="step-lbl-0">
        <div className="form-step-hd">
          <span className="step-badge">1</span>
          <h2 className="step-title" id="step-lbl-0">Datos personales</h2>
        </div>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" name="apellido" placeholder="Tu apellido" required />
          </div>
          <div className="field">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
          </div>
          <div className="field">
            <label htmlFor="dni">DNI (sin puntos)</label>
            <input type="text" id="dni" name="dni" placeholder="Ej: 35000000" inputMode="numeric" pattern="[0-9]+" required />
          </div>
          <div className="field">
            <label htmlFor="nacimiento">Fecha de nacimiento</label>
            <input type="date" id="nacimiento" name="nacimiento" required />
          </div>
          <div className="field">
            <label htmlFor="telefono">Teléfono celular</label>
            <input type="tel" id="telefono" name="telefono" placeholder="+54 _" required />
          </div>
          <div className="field">
            <label htmlFor="ciudad">Ciudad de residencia</label>
            <input type="text" id="ciudad" name="ciudad" placeholder="Ej: Corrientes" required />
          </div>
          <div className="field field-full">
            <label htmlFor="cambio-residencia">Disponibilidad de cambio de residencia</label>
            <select id="cambio-residencia" name="cambio_residencia" required>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </div>

      {/* PASO 2 */}
      <div className="form-step" id="step-1" role="group" aria-labelledby="step-lbl-1">
        <div className="form-step-hd">
          <span className="step-badge">2</span>
          <h2 className="step-title" id="step-lbl-1">Perfil profesional</h2>
        </div>
        <div className="form-grid">
          <div className="field field-full">
            <label htmlFor="formacion">Máxima formación académica</label>
            <select id="formacion" name="formacion" required>
              <option value="sec-inc">Secundario incompleto</option>
              <option value="sec-comp">Secundario completo</option>
              <option value="tec-inc">Terciario / Universitario incompleto</option>
              <option value="tec-comp">Terciario completo</option>
              <option value="uni-comp">Universitario completo</option>
              <option value="posgrado">Posgrado / Maestría</option>
            </select>
          </div>

          <div className="field field-full">
            <label>Habilidades — nivel de dominio</label>
            <div className="skills-wrap">
              <table className="skills-table">
                <thead>
                  <tr>
                    <th className="skill-col-name">Habilidad</th>
                    <th>Nulo</th>
                    <th>Básico</th>
                    <th>Medio</th>
                    <th>Avanzado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Manejo de equipos</td>
                    <td><input type="radio" name="sk_equipos" value="nulo" aria-label="Manejo de equipos: Nulo" /></td>
                    <td><input type="radio" name="sk_equipos" value="basico" aria-label="Manejo de equipos: Básico" /></td>
                    <td><input type="radio" name="sk_equipos" value="medio" aria-label="Manejo de equipos: Medio" /></td>
                    <td><input type="radio" name="sk_equipos" value="avanzado" aria-label="Manejo de equipos: Avanzado" /></td>
                  </tr>
                  <tr>
                    <td>Google Drive</td>
                    <td><input type="radio" name="sk_gdrive" value="nulo" aria-label="Google Drive: Nulo" /></td>
                    <td><input type="radio" name="sk_gdrive" value="basico" aria-label="Google Drive: Básico" /></td>
                    <td><input type="radio" name="sk_gdrive" value="medio" aria-label="Google Drive: Medio" /></td>
                    <td><input type="radio" name="sk_gdrive" value="avanzado" aria-label="Google Drive: Avanzado" /></td>
                  </tr>
                  <tr>
                    <td>Idioma inglés</td>
                    <td><input type="radio" name="sk_ingles" value="nulo" aria-label="Idioma inglés: Nulo" /></td>
                    <td><input type="radio" name="sk_ingles" value="basico" aria-label="Idioma inglés: Básico" /></td>
                    <td><input type="radio" name="sk_ingles" value="medio" aria-label="Idioma inglés: Medio" /></td>
                    <td><input type="radio" name="sk_ingles" value="avanzado" aria-label="Idioma inglés: Avanzado" /></td>
                  </tr>
                  <tr>
                    <td>Idioma portugués</td>
                    <td><input type="radio" name="sk_portugues" value="nulo" aria-label="Idioma portugués: Nulo" /></td>
                    <td><input type="radio" name="sk_portugues" value="basico" aria-label="Idioma portugués: Básico" /></td>
                    <td><input type="radio" name="sk_portugues" value="medio" aria-label="Idioma portugués: Medio" /></td>
                    <td><input type="radio" name="sk_portugues" value="avanzado" aria-label="Idioma portugués: Avanzado" /></td>
                  </tr>
                  <tr>
                    <td>Conducción de vehículos</td>
                    <td><input type="radio" name="sk_conduccion" value="nulo" aria-label="Conducción: Nulo" /></td>
                    <td><input type="radio" name="sk_conduccion" value="basico" aria-label="Conducción: Básico" /></td>
                    <td><input type="radio" name="sk_conduccion" value="medio" aria-label="Conducción: Medio" /></td>
                    <td><input type="radio" name="sk_conduccion" value="avanzado" aria-label="Conducción: Avanzado" /></td>
                  </tr>
                  <tr>
                    <td>Análisis de datos</td>
                    <td><input type="radio" name="sk_datos" value="nulo" aria-label="Análisis de datos: Nulo" /></td>
                    <td><input type="radio" name="sk_datos" value="basico" aria-label="Análisis de datos: Básico" /></td>
                    <td><input type="radio" name="sk_datos" value="medio" aria-label="Análisis de datos: Medio" /></td>
                    <td><input type="radio" name="sk_datos" value="avanzado" aria-label="Análisis de datos: Avanzado" /></td>
                  </tr>
                  <tr>
                    <td>Sistemas de gestión (ERP, SAP...)</td>
                    <td><input type="radio" name="sk_erp" value="nulo" aria-label="ERP/SAP: Nulo" /></td>
                    <td><input type="radio" name="sk_erp" value="basico" aria-label="ERP/SAP: Básico" /></td>
                    <td><input type="radio" name="sk_erp" value="medio" aria-label="ERP/SAP: Medio" /></td>
                    <td><input type="radio" name="sk_erp" value="avanzado" aria-label="ERP/SAP: Avanzado" /></td>
                  </tr>
                  <tr>
                    <td>Redes sociales</td>
                    <td><input type="radio" name="sk_rrss" value="nulo" aria-label="Redes sociales: Nulo" /></td>
                    <td><input type="radio" name="sk_rrss" value="basico" aria-label="Redes sociales: Básico" /></td>
                    <td><input type="radio" name="sk_rrss" value="medio" aria-label="Redes sociales: Medio" /></td>
                    <td><input type="radio" name="sk_rrss" value="avanzado" aria-label="Redes sociales: Avanzado" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="field field-full">
            <label htmlFor="tipo-postulacion">¿Te postulás a una búsqueda puntual o a la base de datos?</label>
            <select id="tipo-postulacion" name="tipo_postulacion" required>
              <option value="puntual">Estoy aplicando a una búsqueda puntual</option>
              <option value="base">Quiero estar en la base de datos</option>
            </select>
          </div>
        </div>
      </div>

      {/* PASO 3 */}
      <div className="form-step" id="step-2" role="group" aria-labelledby="step-lbl-2">
        <div className="form-step-hd">
          <span className="step-badge">3</span>
          <h2 className="step-title" id="step-lbl-2">Búsquedas activas</h2>
        </div>
        <div className="form-grid">
          <div className="field field-full">
            <label>¿A qué búsqueda activa querés postularte?</label>
            <div className="check-list">
              <label className="check-item">
                <input type="checkbox" name="busqueda" value="resp-ventas-misiones" />
                <span>Responsable de venta (Zona Misiones)</span>
              </label>
              <label className="check-item">
                <input type="checkbox" name="busqueda" value="admin-contable-ctes" />
                <span>Administrativo contable (Corrientes)</span>
              </label>
              <label className="check-item">
                <input type="checkbox" name="busqueda" value="asesora-ventas-res" />
                <span>Asesora de ventas (Resistencia)</span>
              </label>
              <label className="check-item">
                <input type="checkbox" name="busqueda" value="supervisor-ventas-ctes" />
                <span>Supervisor de ventas (Corrientes)</span>
              </label>
              <label className="check-item">
                <input type="checkbox" name="busqueda" value="ejecutivo-comercial-ctes" />
                <span>Ejecutivo comercial (Corrientes)</span>
              </label>
              <label className="check-item">
                <input type="checkbox" name="busqueda" value="auxiliar-admin-ctes" />
                <span>Auxiliar administrativo (Corrientes)</span>
              </label>
              <label className="check-item">
                <input type="checkbox" name="busqueda" value="asesor-inmobiliario-ctes" />
                <span>Asesor de ventas Inmobiliario (Corrientes)</span>
              </label>
              <label className="check-item">
                <input type="checkbox" name="busqueda" value="vendedor" />
                <span>Vendedor/a</span>
              </label>
            </div>
          </div>
          <div className="field">
            <label htmlFor="experiencia">Nivel de experiencia</label>
            <select id="experiencia" name="experiencia" required>
              <option value="sin-exp">Primer empleo / Sin experiencia</option>
              <option value="1-2">1 a 2 años</option>
              <option value="3-5">3 a 5 años</option>
              <option value="5+">Más de 5 años</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="horario">Disponibilidad horaria</label>
            <select id="horario" name="horario" required>
              <option value="full">Full Time</option>
              <option value="part">Part Time</option>
              <option value="indiferente">Indiferente</option>
            </select>
          </div>
          <div className="field field-full">
            <label htmlFor="trabaja">¿Trabajás actualmente?</label>
            <select id="trabaja" name="trabaja" required>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </div>

      {/* PASO 4 */}
      <div className="form-step" id="step-3" role="group" aria-labelledby="step-lbl-3">
        <div className="form-step-hd">
          <span className="step-badge">4</span>
          <h2 className="step-title" id="step-lbl-3">Último paso</h2>
        </div>
        <div className="form-grid">
          <div className="field field-full">
            <label htmlFor="como-entero">¿Cómo te enteraste de 4Peeq People?</label>
            <select id="como-entero" name="como_entero" required>
              <option value="instagram">Instagram</option>
              <option value="linkedin">LinkedIn</option>
              <option value="facebook">Facebook</option>
              <option value="referido">Me lo recomendaron</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div className="field field-full">
            <label htmlFor="experiencias">Contanos sobre tus últimas dos experiencias laborales</label>
            <textarea id="experiencias" name="experiencias" rows="6" placeholder="Empresa, cargo, período y principales tareas..." required></textarea>
          </div>
          <div className="field field-full">
            <label htmlFor="comentario">¿Algún comentario adicional?</label>
            <textarea id="comentario" name="comentario" rows="4" placeholder="Opcional..."></textarea>
          </div>
        </div>
      </div>

    </div>{/* /.wiz-body */}

    {/* WIZARD NAV */}
    <div className="wiz-nav" id="wiz-nav">
      <button className="btn btn-ghost wiz-back" id="wiz-back" disabled>
        <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M13 4l-6 6 6 6"/></svg>
        Anterior
      </button>
      <span className="wiz-counter"><span id="wiz-cur">1</span> de 4</span>
      <button className="btn btn-violet wiz-next" id="wiz-next">
        Siguiente <span className="arr">→</span>
      </button>
    </div>

    {/* Estado de éxito */}
    <div className="form-success" id="form-success" hidden>
      <div className="success-icon">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h2>¡Recibimos tu postulación!</h2>
      <p>En breve nos ponemos en contacto. Gracias por sumarte a 4Peeq People.</p>
      <a href="people.html" className="btn btn-violet" style={{ marginTop: '28px' }}>Ver más sobre People <span className="arr">→</span></a>
    </div>

  </div>
</section>
    </>
  )
}
