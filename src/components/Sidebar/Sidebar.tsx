import clsx from 'clsx'

import styles from "./Sidebar.module.scss"

import MainSidebar from './MainSidebar';
import MobileSidebar from './MobileSidebar';

export interface ISidebarProps {
  className?: string,
  mode?: string
}

const Sidebar = (props: ISidebarProps) => {
  const { className, mode = "light" } = props;

  return (
    <div className={clsx(styles.root, className && className)} data-test="sidebar">
      <MobileSidebar mode={mode} />
      <MainSidebar mode={mode} className={styles.mainSidebar} />
    </div>
  )
}

export default Sidebar