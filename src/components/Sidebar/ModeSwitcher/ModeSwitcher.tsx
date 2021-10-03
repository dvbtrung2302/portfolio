import clsx from 'clsx'

import styles from "./ModeSwitcher.module.scss"

import { IInitialThemeReducerState } from 'redux/reducers/themeReducer';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { toggleMode } from 'redux/action-creators';
import { ThemeActionTypes } from 'redux/action-types';

export interface IModeSwitcherProps {
  className?: string
}

const ModeSwitcher = (props: IModeSwitcherProps) => {
  const { className } = props;
  
  const theme: IInitialThemeReducerState = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();

  const changeMode = (): void => {
    const targetMode = theme.mode === "dark" ? ThemeActionTypes.LIGHT_MODE : ThemeActionTypes.DARK_MODE;
    dispatch(
      toggleMode(targetMode)
    )
  }

  return (
    <div 
      className={clsx(
        styles.root, 
        className && className,
        theme.mode === "dark" && styles.darkMode
      )} 
      onClick={changeMode}
      data-test="mode-switcher"
    >
      <div className={styles.toggle}></div>
      <div className={styles.modes}>
        <p className={styles.light}>Light</p>
        <p className={styles.dark}>Dark</p>
      </div>
    </div>
  )
}

export default ModeSwitcher