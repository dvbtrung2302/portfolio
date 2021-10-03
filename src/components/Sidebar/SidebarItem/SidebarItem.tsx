import clsx from 'clsx'

import styles from "./SidebarItem.module.scss"

export interface ISidebarItemProps {
  className?: string,
  id: string,
  icon: string,
  name: string,
}

const SidebarItem = (props: ISidebarItemProps) => {
  const { className, id, icon, name } = props;

  return (
    <div className={clsx(styles.root, className && className)} data-test="sidebar-item">
      <div className={styles.icon} data-test="sidebar-item-icon">
        <i className={icon}></i>
      </div>
      <span className={styles.name} data-test="sidebar-item-name">
        { name }
      </span>
    </div>
  )
}

export default SidebarItem