import clsx from 'clsx'

import ModeSwitcher from './ModeSwitcher';
import SidebarItem, { ISidebarItemProps } from './SidebarItem';

import styles from "./MainSidebar.module.scss"

import { SIDEBAR_ITEMS } from '../constants';

export interface IMainSidebarProps {
  className?: string,
  mode?: string
}

const MainSidebar = (props: IMainSidebarProps) => {
  const { className, mode } = props;

  return (
    <div className={clsx(styles.root, className && className)} data-test="main-sidebar">
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

export default MainSidebar