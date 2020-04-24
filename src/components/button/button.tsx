import React from 'react'
import './button.scss'

interface IButton {
  text: string
  callback: any
}

const Button: React.FC<IButton> = ({ text, callback }) => {
  return (
    <button type="button" className="button" onClick={() => callback()}>
      {text}
    </button>
  )
}

export default Button
