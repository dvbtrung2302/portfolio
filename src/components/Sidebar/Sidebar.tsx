import clsx from 'clsx'

import styles from "./Sidebar.module.scss"

import { SIDEBAR_ITEMS } from './constants';
import SidebarItem, { ISidebarItemProps } from './SidebarItem';

export interface ISidebarProps {
  className?: string
}

const Sidebar = (props: ISidebarProps) => {
  const { className } = props;

  return (
    <div className={clsx(styles.root, className && className)} data-test="sidebar">
      <div className={styles.logo}>
        <img src="/images/light-logo.svg" alt="Page Logo" data-test="logo-image" />
      </div>
      <div className={styles.list} data-test="list-menu">
        {
          SIDEBAR_ITEMS.map((item: ISidebarItemProps) => 
            <SidebarItem key={item.id} {...item} />
          )
        }
      </div>
    </div>
  )
}

export default Sidebar