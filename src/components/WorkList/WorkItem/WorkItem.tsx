import { useState } from 'react';
import clsx from 'clsx'

import styles from "./WorkItem.module.scss"

import { IProject } from 'typings';

import PopupWrapper from 'components/PopupWrapper';
import ProjectDetailPopup from '../ProjectDetailPopup';

import { CATEGORY_TYPE } from 'constants/global';

export interface IWorkItemProps extends IProject {
  className?: string
}

const WorkItem = (props: IWorkItemProps) => {
  const { 
    className,
    name,
    logo,
    category,
  } = props;
  const [open, setOpen] = useState<boolean>(false);

  const togglePopup = (): void => setOpen(!open);

  return (
    <div className={clsx(styles.root, className && className)} data-test="work-item">
      <div className={styles.wrapper} onClick={togglePopup} data-test="box-wrapper">
        <img src={logo} alt={name || ""} className={styles.logo} data-test="work-item-logo" />
        <div className={styles.overlay}></div>
        <span className={styles.category} data-test="work-item-category">{CATEGORY_TYPE[category]}</span>
        <h4 className={styles.name} data-test="work-item-name">{name}</h4>
        <span className={styles.detailButton}>
          <i className="fas fa-info"></i>
        </span>
      </div>
      <PopupWrapper 
        onClose={togglePopup} 
        isOpen={open} 
        data-test="project-detail-popup"
      >
        <ProjectDetailPopup {...props} onClose={togglePopup} />
      </PopupWrapper>
    </div>
  )
}

export default WorkItem