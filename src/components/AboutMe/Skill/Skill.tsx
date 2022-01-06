import clsx from 'clsx'

import styles from "./Skill.module.scss"

export interface ISkillProps {
  className?: string,
  skillName: string
  percent: number,
  progressColor?: string,
}

const Skill = (props: ISkillProps) => {
  const { className, skillName, progressColor, percent } = props;

  return (
    <div className={clsx(styles.root, className && className)} data-test="skill-item">
      <div className={styles.title}>
        <p className={styles.skillName} data-test="skill-name">{skillName}</p>
      </div>
      <div className={styles.progress} data-test="skill-progress">
        <div 
          className={styles.progressBar} 
          style={{width: `${percent}%`, backgroundColor: progressColor}}
          data-test="skill-progress-bar"
        ></div>
      </div>
    </div>
  )
}

export default Skill