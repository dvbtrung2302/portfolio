import clsx from 'clsx'

import styles from "./Title.module.scss"

import { IInitialThemeReducerState } from 'redux/reducers/themeReducer';
import { useAppSelector } from 'hooks/useAppSelector';

export interface ITitleProps {
  className?: string,
  text: string
}

const Title = (props: ITitleProps) => {
  const { className, text } = props;
  const theme: IInitialThemeReducerState = useAppSelector(state => state.theme);

  return (
    <div className={clsx(styles.root, className && className)} data-test="title">
      <div className={styles.icon}>
        <img 
          src={`/images/title-icon-${theme.mode}.svg`}
          alt="Title Icon" 
          data-test="title-icon" 
        />
      </div>
      <h2 className={styles.title} data-test="title-text">{text}</h2>
    </div>
  )
}

export default Title