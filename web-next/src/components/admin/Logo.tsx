import React from 'react'

export const Logo: React.FC = () => {
  return (
    <div className="logo-container" style={{ padding: '20px 0', display: 'flex', alignItems: 'center' }}>
      <img
        src="/logo-blanco.png"
        alt="4peeq Logo"
        style={{
          maxWidth: '100%',
          height: '40px',
          objectFit: 'contain',
        }}
      />
    </div>
  )
}
