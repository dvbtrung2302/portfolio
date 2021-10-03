import React from "react"
import clsx from 'clsx'

import styles from "./Demo.module.scss"

export interface IDemoProps {
  className?: string
}

const Demo = (props: IDemoProps) => {
  const { className } = props;

  return (
    <div className={clsx(styles.root, className && className)} data-test="demo-component">
      Demo component
    </div>
  )
}

export default Demo