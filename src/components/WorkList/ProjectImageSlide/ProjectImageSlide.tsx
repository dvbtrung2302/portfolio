import clsx from 'clsx'
import { memo, useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import styles from "./ProjectImageSlide.module.scss"

import ProjectImage from '../ProjectImage'


export interface IProjectImageSlideProps {
  className?: string,
  items: {
    id: number,
    src: string,
    type: string
  }[]
}

const ProjectImageSlide = (props: IProjectImageSlideProps) => {
  const { className, items } = props
  const [loaded, setLoaded] = useState<boolean>(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slides: {
      spacing: 15,
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div className={clsx(styles.root, className && className)} data-test="project-image-slide">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider" data-test="project-image-slide-list">
          {items?.map(item =>
            <div 
              className="keen-slider__slide" 
              key={item.id} 
              data-test={item.id === (instanceRef.current?.track.details.rel || 0) + 1 ?
                "current-slide" :
                "not-current-slide"
              }>
              <ProjectImage src={item.src} alt={item.src} type={item.type} />
            </div>
          )}
        </div>
        {loaded && instanceRef.current && (
          <>
            <div
              onClick={() => instanceRef.current?.prev()}
              className={styles.arrow}
              data-test="prev-arrow"
            >
              <i className="fas fa-long-arrow-alt-left"></i>
            </div>
            <div
              onClick={() => instanceRef.current?.next()}
              className={clsx(styles.arrow, styles.rightArrow)}
            >
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default memo(ProjectImageSlide)
