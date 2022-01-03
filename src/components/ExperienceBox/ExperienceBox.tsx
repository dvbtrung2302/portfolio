import clsx from 'clsx'

import styles from "./ExperienceBox.module.scss"

import { IExperience } from 'typings';
import ExperienceItem from './ExperienceItem';

export interface IExperienceBoxProps {
  className?: string,
  items: IExperience[]
}

const ExperienceBox = (props: IExperienceBoxProps) => {
  const { className, items } = props;

  return (
    <div className={clsx(styles.root, className && className)} data-test="experience-box">
      <div className={styles.list} data-test="experience-list">
        { items.map(item =>
          <ExperienceItem {...item} key={item.id} />  
        )}
      </div>
      <span className={styles.line} data-test="line"></span>
    </div>
  )
}

export default ExperienceBox