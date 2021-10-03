import clsx from 'clsx'

import styles from "./Sidebar.module.scss"

import { SIDEBAR_ITEMS } from './constants';
import SidebarItem, { ISidebarItemProps } from './SidebarItem';
import ModeSwitcher from './ModeSwitcher';

export interface ISidebarProps {
  className?: string,
  mode?: string
}

const Sidebar = (props: ISidebarProps) => {
  const { className, mode = "light" } = props;

  return (
    <div className={clsx(styles.root, className && className)} data-test="sidebar">
      <div className={styles.logo}>
        <img 
          src={`/images/${mode}-logo.svg`}
          alt="Page Logo" 
          data-test="logo-image" 
        />
      </div>
      <div className={styles.list} data-test="list-menu">
        {
          SIDEBAR_ITEMS.map((item: ISidebarItemProps) => 
            <SidebarItem key={item.id} {...item} />
          )
        }
      </div>
      <ModeSwitcher />
    </div>
  )
}

export default Sidebar