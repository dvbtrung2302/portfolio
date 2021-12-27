import clsx from 'clsx'

import styles from "./AchievementItem.module.scss"

export interface IAchievementItemProps {
  className?: string,
  icon: string,
  amount: string,
  name: string
}

const AchievementItem = (props: IAchievementItemProps) => {
  const { className, icon, amount, name } = props;

  return (
    <div className={clsx(styles.root, className && className)} data-test="achievement-item">
      <div className={styles.icon} data-test="achievement-icon">
        <i className={icon}></i>
      </div>
      <div className={styles.content}>
        <p className={styles.amount} data-test="achievement-amount">{amount}</p>
        <p className={styles.name} data-test="achievement-name">{name}</p>
      </div>
    </div>
  )
}

export default AchievementItem