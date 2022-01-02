import clsx from 'clsx'

import styles from "./SkillItem.module.scss"

export interface ISkillItemProps {
  className?: string,
  imageSrc: string,
  name?: string
}

const SkillItem = (props: ISkillItemProps) => {
  const { className, imageSrc, name } = props;

  return (
    <div className={clsx(styles.root, className && className)} data-test="skill-item">
      <img src={imageSrc} alt={name || ""} className={styles.image} data-test="skill-item-logo" />
      <div className={styles.overlay} data-test="skill-item-overlay"></div>
      { name &&
        <h4 className={styles.name} data-test="skill-item-name">{name}</h4>
      }
    </div>
  )
}

export default SkillItem