import clsx from 'clsx'

import SkillItem from './SkillItem';

import { INFO } from 'constants/global';

import styles from "./SkillList.module.scss"

export interface ISkillListProps {
  className?: string
}

const SkillList = (props: ISkillListProps) => {
  const { className } = props;

  return (
    <div className={clsx(styles.root, className && className)} data-test="skill-list">
      { INFO.techSkills.map(item =>
        <SkillItem 
          key={item.id}
          { ...item }
        />
      )}
    </div>
  )
}

export default SkillList