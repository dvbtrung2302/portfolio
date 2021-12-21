import { useState } from 'react';
import clsx from 'clsx'

import styles from "./MobileSidebar.module.scss"

import MainSidebar from '../MainSidebar';

export interface ISMobileSidebarProps {
  className?: string,
  mode?: string
}

const MobileSidebar = (props: ISMobileSidebarProps) => {
  const { className, mode } = props;
  const [burgerClick, setBurgerClick] = useState<boolean>(false);

  const toggleBurger = (): void => {
    setBurgerClick(!burgerClick)
  }

  return (
    <div className={clsx(styles.root, className && className)} data-test="mobile-sidebar">
      <div className={styles.header} data-test="mobile-sidebar-header">
        <div 
          className={clsx(styles.burger, burgerClick && styles.activeBurger)} 
          onClick={toggleBurger}
          data-test="burger-button"
        >
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
        </div>
        <div className={styles.logo}>
          <img 
            src={`/images/${mode}-logo.svg`}
            alt="Page Logo" 
          />
        </div>
      </div>
      <div 
        className={clsx(styles.overlay, burgerClick && styles.activeOverlay)} 
        onClick={toggleBurger}
        data-test="mobile-sidebar-overlay"
      ></div>
      <MainSidebar 
        mode={mode} 
        className={clsx(styles.mainSidebar, burgerClick && styles.activeMainSidebar)} 
        data-test="mobile-main-sidebar"
      />
    </div>
  )
}

export default MobileSidebar