import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx'

import styles from "./SidebarItem.module.scss"

export interface ISidebarItemProps {
  className?: string,
  link: string,
  icon: string,
  name: string,
  closeSidebar?: Function
}

const SidebarItem = (props: ISidebarItemProps) => {
  const { className, icon, name, link, closeSidebar } = props;
  const location = useLocation();

  const handleClick = ():void => {
    if (closeSidebar) closeSidebar()
  }

  return (
    <div 
      className={clsx(styles.root, className && className, location.pathname === link && styles.active)}
      data-test="sidebar-item"
    >
      <Link to={link} onClick={handleClick}>
        <div className={styles.icon} data-test="sidebar-item-icon">
          <i className={icon}></i>
        </div>
        <span className={styles.name} data-test="sidebar-item-name">
          { name }
        </span>
      </Link>
    </div>
  )
}

export default SidebarItem