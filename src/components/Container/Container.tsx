import clsx from 'clsx'
import { ReactNode } from 'react';

import styles from "./Container.module.scss"

export interface IContainerProps {
  className?: string,
  children: ReactNode
}

const Container = (props: IContainerProps) => {
  const { className, children } = props;

  return (
    <div className={clsx(styles.root, className && className)} data-test="container">
      { children }
    </div>
  )
}

export default Container