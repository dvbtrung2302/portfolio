import clsx from 'clsx'

import styles from "./AboutMe.module.scss"

import Avatar from 'components/Avatar';
import Button from 'components/Button';

import { INFO } from 'constants/global';
import Skill from './Skill';
import AchievementItem from './AchievementItem';

export interface IAboutMeProps {
  className?: string
}

const AboutMe = (props: IAboutMeProps) => {
  const { className } = props;

  return (
    <div className={clsx(styles.root, className && className)} data-test="about-me">
      <div className={styles.about}>
        <Avatar className={styles.avatar} />
        <div className={styles.mainContent}>
          <div className={styles.intro}>
            <p className={styles.text} data-test="about-me-description">{INFO.description}</p>
            <Button data-test="download-cv-button">
              <a href="/cv.pdf" download="DangVoBaoTrung_CV">Download CV</a>
            </Button>
          </div>
          <div className={styles.skillList} data-test="skill-list">
            { INFO.skills.map(item =>
              <div className={styles.skillItem} key={item.id} >
                <Skill 
                  skillName={item.name} 
                  percent={item.percent} 
                  progressColor={item.color}  
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.achievementList} data-test="achievement-list">
        { INFO.achivements.map(item =>
          <div className={styles.achievementItem} key={item.id} >
            <AchievementItem  { ...item } />
          </div>
        )}
      </div>
    </div>
  )
}

export default AboutMe