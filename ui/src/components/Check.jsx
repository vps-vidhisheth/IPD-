import React from 'react'

const Check = () => {
  return (
    <div className="relative w-64 h-64">
      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-blue-900">
        <svg width="50%" height="50%" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="white" />
          <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="20" fontWeight="bold">
            Decentralized EVM &amp; DApp
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-blue-900 opacity-50">
        <svg width="50%" height="50%" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="10" />
          <path d="M 50 20 A 30 30 0 0 1 80 50" fill="none" stroke="white" strokeWidth="10" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-blue-900 opacity-50">
        <svg width="50%" height="50%" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="10" />
          <path d="M 50 80 A 30 30 0 0 0 20 50" fill="none" stroke="white" strokeWidth="10" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-blue-900 opacity-50">
        <svg width="50%" height="50%" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="10" />
          <path d="M 80 50 A 30 30 0 0 0 50 20" fill="none" stroke="white" strokeWidth="10" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-blue-900 opacity-50">
        <svg width="50%" height="50%" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="10" />
          <path d="M 20 50 A 30 30 0 0 1 50 80" fill="none" stroke="white" strokeWidth="10" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-blue-900">
        <svg width="50%" height="50%" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="10" />
          <path d="M 50 20 A 30 30 0 0 0 20 50" fill="none" stroke="white" strokeWidth="10" strokeLinecap="round" />
          <path d="M 20 50 A 30 30 0 0 1 50 80" fill="none" stroke="white" strokeWidth="10" strokeLinecap="round" />
          <path d="M 50 80 A 30 30 0 0 0 80 50" fill="none" stroke="white" strokeWidth="10" strokeLinecap="round" />
          <path d="M 80 50 A 30 30 0 0 1 50 20" fill="none" stroke="white" strokeWidth="10" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}

export default Check;