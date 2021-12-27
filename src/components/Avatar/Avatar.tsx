import clsx from 'clsx'

import styles from "./Avatar.module.scss"

import { INFO } from 'constants/global';

export interface IAvatarProps {
  className?: string,
  src?: string,
}

const Avatar = (props: IAvatarProps) => {
  const { className, src = INFO.avatar } = props;

  return (
    <div className={clsx(styles.root, className && className)} data-test="avatar">
      <img src={src} alt="user avatar" />
    </div>
  )
}

export default Avatar