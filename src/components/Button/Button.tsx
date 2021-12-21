import { ReactNode } from 'react';
import clsx from 'clsx'

import styles from "./Button.module.scss"

export interface IButtonProps {
  className?: string,
  children: ReactNode,
  type?: "submit" | "button",
  disabled?: boolean,
  onClick?: Function
}

const Button = (props: IButtonProps) => {
  const { 
    className, 
    children, 
    type = "button", 
    disabled = false,
    onClick
  } = props;

  const handleClick = () => {
    if (onClick) onClick()
  }

  return (
    <button 
      className={clsx(styles.root, className && className)}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      data-test="button"
    >
      { children }
    </button>
  )
}

export default Button