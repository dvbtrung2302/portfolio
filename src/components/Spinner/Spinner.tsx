import clsx from 'clsx'

import styles from "./Spinner.module.scss"

export interface ISpinnerProps {
  className?: string
}

const Spinner = (props: ISpinnerProps) => {
  const { className } = props;

  return (
    <div className={clsx(styles.root, className && className)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Spinner