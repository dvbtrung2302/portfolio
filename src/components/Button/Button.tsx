import { ReactNode } from 'react';
import clsx from 'clsx'

import styles from "./Button.module.scss"

export interface IButtonProps {
  className?: string,
  children: ReactNode,
  type?: "submit" | "button",
  disabled?: boolean
}

const Button = (props: IButtonProps) => {
  const { 
    className, 
    children, 
    type = "button", 
    disabled = false 
  } = props;

  return (
    <button 
      className={clsx(styles.root, className && className)}
      type={type}
      disabled={disabled}
    >
      { children }
    </button>
  )
}

export default Button