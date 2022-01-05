import clsx from 'clsx'

import styles from "./ProjectDetailPopup.module.scss"

import { IProject } from 'typings';
import ProjectImageSlide from '../ProjectImageSlide';
import { useEffect, useState } from 'react';

export interface IProjectDetailPopupProps extends IProject {
  className?: string,
}

const ProjectDetailPopup = (props: IProjectDetailPopupProps) => {
  const { 
    className,
    name,
    technicals,
    description,
    link,
    images 
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <div className={clsx(styles.root, className && className)} data-test="project-detail-popup">
      <h2 className={styles.projectName} data-test="project-name">{name}</h2>
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