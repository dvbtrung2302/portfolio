import { memo } from 'react';
import clsx from 'clsx'

import { INFO } from 'components/Sidebar/constants';

import Button from 'components/Button';

import styles from "./InfomationBox.module.scss"

export interface IInfomationBoxProps {
  className?: string
}

const InfomationBox = (props: IInfomationBoxProps) => {
  const { className } = props;

  return (
    <div className={clsx(styles.root, className && className)} data-test="infomation-box">
      <div className={styles.avatar} data-test="avatar">
        <img src={INFO.avatar} alt="user avatar" />
      </div>
      <h1 className={styles.name} data-test="name">{INFO.name}</h1>
      <p className={styles.job} data-test="job">{INFO.job}</p>
      <ul className={styles.socialList} data-test="social-list">
        { INFO.socials.map(item =>
          <li key={item.id} className={styles.socialItem}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <i className={item.icon}></i>
            </a>
          </li>
        )}
      </ul>
      <Button>
        More about me
      </Button>
    </div>
  )
}

export default memo(InfomationBox)