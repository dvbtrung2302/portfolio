import clsx from 'clsx'

import styles from "./ExperienceItem.module.scss"

import { IExperience } from 'typings';

export interface IExperienceItemProps extends IExperience {
  className?: string,
}

const ExperienceItem = (props: IExperienceItemProps) => {
  const { 
    className,
    time,
    title,
    description,
    icon
  } = props;

  return (
    <div className={clsx(styles.root, className && className)} data-test="experience-item">
      <p className={styles.time} data-test="experience-time">{time}</p>
      <h4 className={styles.title} data-test="experience-title">{title}</h4>
      <p className={styles.description} data-test="experience-description">{description}</p>
      <div className={styles.icon} data-test="experience-icon">
        <i className={icon}></i>
      </div>
    </div>
  )
}

export default ExperienceItem