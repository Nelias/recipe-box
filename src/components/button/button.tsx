import React from 'react'
import './button.scss'

interface IButton {
  text: string
  callback: () => void
  type?: string
  disabled?: boolean
}

const Button: React.FC<IButton> = ({ text, callback, type, disabled }) => {
  return (
    <button
      type="button"
      className={`button ${type}`}
      onClick={() => callback()}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
