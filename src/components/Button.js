import React from "react";
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  link,
  type, 
  onClick, 
  buttonStyle, 
  buttonSize  
}) => {
  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  return (
    <a href={link} className='btn-mobile'>
      <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      >
        {children}
      </button>
    </a>
  )
}