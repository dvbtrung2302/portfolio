import clsx from 'clsx'

import ModeSwitcher from './ModeSwitcher';
import GithubLink from '../GithubLink';
import SidebarItem, { ISidebarItemProps } from './SidebarItem';

import styles from "./MainSidebar.module.scss"

import { SIDEBAR_ITEMS } from '../constants';

export interface IMainSidebarProps {
  className?: string,
  mode?: string,
  closeSidebar?: Function
}

const MainSidebar = (props: IMainSidebarProps) => {
  const { className, mode, closeSidebar } = props;

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
            <SidebarItem key={item.link} closeSidebar={closeSidebar} {...item} />
          )
        }
      </div>
      <div className={styles.action}>
        <ModeSwitcher className={styles.modeSwitcher} />
        <GithubLink />
      </div>
    </div>
  )
}

export default MainSidebar