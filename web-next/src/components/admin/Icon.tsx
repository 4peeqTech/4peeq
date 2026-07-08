import React from 'react'

export const Icon: React.FC = () => {
  return (
    <div className="icon-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img
        src="/favicon.svg"
        alt="4peeq Icon"
        style={{
          width: '32px',
          height: '32px',
          objectFit: 'contain',
        }}
      />
    </div>
  )
}
