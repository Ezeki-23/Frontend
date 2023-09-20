import React from 'react'

export function Message ({ message }) {
  return (
    <p className="text-slate-200 bg-red-500 text-xs">
      {message}
    </p>
  )
}
