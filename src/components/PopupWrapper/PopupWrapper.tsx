import React, { ReactNode, useCallback, useEffect, useRef } from "react"
import clsx from 'clsx'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import styles from "./PopupWrapper.module.scss"
import popupStyles from './popup.module.scss'
import overlayStyles from './overlay.module.scss'

export interface PopupWrapperProps {
  className?: string,
  popupClassName?: string,
  isOpen?: boolean,
  children?: ReactNode,
  timeout?: number,
  enter?: boolean,
  exit?: boolean,
  onClose?: Function,
  closeOnClickOutside?: boolean,
  /** Write your own animation */
  classNames?: {
    appear?: string,
    appearActive?: string,
    appearDone?: string,
    enter?: string,
    enterActive?: string,
    enterDone?: string,
    exit?: string,
    exitActive?: string,
    exitDone?: string,
  }
}

const PopupWrapper = (props: PopupWrapperProps) => {
  const { 
    className,
    popupClassName,
    classNames,
    isOpen = false,
    timeout = 250,
    enter = true,
    exit = true,
    closeOnClickOutside = true,
    children,
    onClose
  } = props
  const rootRef = useRef<HTMLDivElement>(null)
  const popupRef = useRef(null)
  const overlayRef = useRef(null)

  // close on "Escape" press
  const handleEscapePress = useCallback((event: KeyboardEvent): void => {
    if(event.key === "Escape" && isOpen && onClose) {
      onClose()
    }
  }, [isOpen, onClose])

  useEffect(() => {
    document.addEventListener("keydown", handleEscapePress, false);
    return () => {
      document.removeEventListener("keydown", handleEscapePress, false);
    }
  }, [handleEscapePress])

  const handleClickOutside = () => {
    if(closeOnClickOutside && onClose) {
      onClose()
    }
  }

  useEffect( () => {
    if(isOpen === true) {
      if (rootRef?.current) {
        rootRef.current.style.zIndex = "9999";
        document.body.style.overflow = 'hidden';
      }
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    }
  }, [isOpen] )

  const onExited = () => {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0';
    if (rootRef?.current) {
      rootRef.current.style.zIndex = "-1";
    }
  }

  return (
    <div className={clsx(styles.root, className && className, isOpen && styles.activeRoot)} ref={rootRef} data-test="popup-wrapper">
      <TransitionGroup component={null}>
        {
          isOpen &&
          <CSSTransition
            classNames={
              classNames ?
              {...classNames}
              :
              {...popupStyles}
            }
            style={{transitionDuration: `${timeout}ms` }}
            timeout={timeout}
            unmountOnExit
            enter={enter}
            exit={exit}
            onExited={onExited}
            nodeRef={popupRef}
          >
            <div 
              className={clsx(styles.popup, popupClassName && popupClassName)} 
              ref={popupRef} 
              data-test="popup-wrapper-content"
            >
              {children}
            </div>
          </CSSTransition>
        }
        {
          isOpen &&
          <CSSTransition
            classNames={{...overlayStyles}}
            style={{transitionDuration: `${timeout}ms`}}
            timeout={timeout}
            unmountOnExit
            enter={true}
            exit={true}
            nodeRef={overlayRef}
          >
            <div 
              className={styles.overlay}
              onClick={handleClickOutside}
              ref={overlayRef}
              data-test="popup-wrapper-overlay"
            ></div>
          </CSSTransition>
        }
      </TransitionGroup>
    </div>
  )
}

export default React.memo(PopupWrapper)