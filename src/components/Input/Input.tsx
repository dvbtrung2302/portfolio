import clsx from 'clsx'
import { ChangeEvent, memo } from 'react';

import { IField } from 'typings';

import styles from "./Input.module.scss"

export interface IInputProps extends IField {
  className?: string,
  value?: string,
  onChange: Function,
  error?: string,
}

const Input = (props: IInputProps) => {
  const { 
    className, 
    placeholder, 
    type = "text", 
    disabled = false,
    name,
    onChange,
    rows,
    value,
    error,
    cols
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    onChange({
      name: name,
      value: value
    })
  }

  return (
    <div className={clsx(
      styles.root, 
      className && className, 
      type === "textarea" && styles.textarea,
      error && styles.error
    )}>
      { type === "textarea" ?
        <textarea 
          className={styles.field}
          name={name}
          placeholder={placeholder}
          rows={rows}
          cols={cols}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          data-test="textarea"
        /> :
        <input 
          className={styles.field}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          data-test="input"
        />
      }
      { error && <span className={styles.errorMessage} data-test="error">{error}</span>}
    </div>
  )
}

export default memo(Input)