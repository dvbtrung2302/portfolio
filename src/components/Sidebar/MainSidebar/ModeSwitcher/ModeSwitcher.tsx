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
      )} 
      onClick={changeMode}
      data-test="mode-switcher"
    >
      { theme.mode !== "dark" ?
        <i className="fas fa-sun" data-test="mode-switcher-icon"></i> :
        <i className="fas fa-moon" data-test="mode-switcher-icon"></i> 
      }
    </div>
  )
}

export default ModeSwitcher