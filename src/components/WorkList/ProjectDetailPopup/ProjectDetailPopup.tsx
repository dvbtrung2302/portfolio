import clsx from 'clsx'

import styles from "./ProjectDetailPopup.module.scss"

import { IProject } from 'typings';
import ProjectImageSlide from '../ProjectImageSlide';
import { useEffect, useState } from 'react';

export interface IProjectDetailPopupProps extends IProject {
  className?: string,
  onClose?: Function
}

const ProjectDetailPopup = (props: IProjectDetailPopupProps) => {
  const { 
    className,
    name,
    technicals,
    description,
    link,
    images,
    onClose
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true)
  }, []);

  const handleClose = (): void => {
    if (onClose) onClose();
  }

  return (
    <div className={clsx(styles.root, className && className)} data-test="project-detail-popup">
      <div className={styles.header}>
        <h2 className={styles.projectName} data-test="project-name">{name}</h2>
        <span className={styles.closeButton} onClick={handleClose} data-test="close-button">
          <i className="fas fa-times"></i>
        </span>
      </div>
      <p data-test="project-description">
        <strong>Description: </strong> {description}
      </p>
      { technicals &&
        <p data-test="project-technicals">
          <strong>Technology: </strong> 
          {technicals?.map(item => 
            <span key={item}>{item}</span>
          )}
        </p>
      }
      { link &&
        <p data-test="project-link">
          <strong>Preview: </strong> 
          <a href={link} target="_blank" rel="noopener noreferrer">Link</a>
        </p>
      }
      { isOpen && 
        <div className={styles.imageList}>
          { images.length > 0 &&
            <ProjectImageSlide items={images} />
          }
        </div>
      }
    </div>
  )
}

export default ProjectDetailPopup