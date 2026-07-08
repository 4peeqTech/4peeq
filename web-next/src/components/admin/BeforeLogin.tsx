import React from 'react'

export const BeforeLogin: React.FC = () => {
  return (
    <>
      <style>{`
        /* Efecto Glow de fondo solo para la pagina de login */
        body {
          background: radial-gradient(circle at 50% 10%, rgba(119,100,169,0.15) 0%, var(--theme-bg) 60%) !important;
        }

        /* Darle estilo glassmorphism al contenedor principal del formulario */
        form {
          background: rgba(21, 20, 43, 0.4) !important;
          backdrop-filter: blur(16px) !important;
          -webkit-backdrop-filter: blur(16px) !important;
          border: 1px solid rgba(154, 134, 207, 0.2) !important;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(119, 100, 169, 0.1) !important;
          border-radius: 24px !important;
          padding: 2.5rem !important;
          position: relative;
        }

        /* Inputs mas elegantes */
        form input {
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: white !important;
          transition: all 0.3s ease !important;
          padding: 14px 18px !important;
        }

        form input:focus {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(154, 134, 207, 0.6) !important;
          box-shadow: 0 0 0 3px rgba(119, 100, 169, 0.25) !important;
        }
        
        /* Ajustar el boton de login para que destaque mas */
        form button[type="submit"] {
          margin-top: 1rem;
          padding: 16px !important;
          font-size: 1.05rem !important;
          font-weight: 600 !important;
        }
      `}</style>
      <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <h2 style={{ 
          margin: '0', 
          fontSize: '1.8rem',
          fontWeight: 700,
          color: 'var(--theme-text)',
          letterSpacing: '-0.02em',
        }}>
          Bienvenid@ de nuevo 👋
        </h2>
        <p style={{ 
          marginTop: '0.75rem', 
          fontSize: '1rem',
          color: 'var(--theme-success-400)',
          lineHeight: 1.5,
        }}>
          Ingresa tus credenciales para administrar el contenido de la plataforma de <strong style={{ color: 'var(--theme-text)' }}>4peeq</strong>.
        </p>
      </div>
    </>
  )
}
