import clsx from 'clsx'

import styles from "./ParallaxBackground.module.scss"

export interface IParallaxBackgroundProps {
  className?: string,
  coordinates?: {
    x: number,
    y: number
  }
}

const ParallaxBackground = (props: IParallaxBackgroundProps) => {
  const { className, coordinates } = props;

  return (
    <div 
      className={clsx(styles.root, className && className)} 
      data-test="parallax-background"
    >
      { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(number =>
        <img 
          src={`/images/parallax-images/parallax-${number}.svg`} 
          alt="" 
          key={number} 
          className={clsx(styles.item, styles[`item${number}`])}
          style={{
            transform: `translate(${coordinates?.x}px, ${coordinates?.y}px)`
          }}
          data-test={`parallax-item-${number}`}
        />
      )}
    </div>
  )
}

export default ParallaxBackground