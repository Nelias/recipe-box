import React from 'react'
import './button.scss'

interface IButton {
  text: string
  callback: any
  type?: string
}

const Button: React.FC<IButton> = ({ text, callback, type }) => {
  return (
    <button
      type="button"
      className={`button ${type}`}
      onClick={() => callback()}
    >
      {text}
    </button>
  )
}

export default Button
