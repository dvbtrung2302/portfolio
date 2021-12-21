import clsx from 'clsx'
import { useState } from 'react';

import styles from "./HomeIntro.module.scss"

import ParallaxBackground from './ParallaxBackground';
import InfomationBox from './InfomationBox';

export interface IHomeIntroProps {
  className?: string
}

const HomeIntro = (props: IHomeIntroProps) => {
  const { className } = props;
  const [state, setState] = useState<{
    x: number, 
    y: number
  }>({
    x: 0,
    y: 0
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const x = (window.innerWidth - event.pageX) / 15;
    const y = (window.innerHeight - event.pageY) / 15;
    setState({
      x,
      y
    })
  }

  return (
    <div className={clsx(styles.root, className && className)} onMouseMove={handleMouseMove} data-test="home-intro">
      <InfomationBox />
      <ParallaxBackground coordinates={state} data-test="parallax-background" />
    </div>
  )
}

export default HomeIntro