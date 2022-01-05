import clsx from 'clsx'

import styles from "./ProjectImage.module.scss"

export interface IProjectImageProps {
  className?: string,
  src: string,
  alt: string,
  type: string
}

const ProjectImage = (props: IProjectImageProps) => {
  const { className, src, alt, type } = props;

  return (
    <div 
      className={
        clsx(
          styles.root, 
          className && className, 
          type === "mobile" && styles.mobile
        )
      }
      data-test="project-image"
    >
      <div className={styles.bar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img src={src} alt={alt}/>
    </div>
  )
}

export default ProjectImage