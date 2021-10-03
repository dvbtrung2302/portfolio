import { ThemeAction } from "redux/actions";
import { ThemeActionTypes } from "../action-types";

export interface IInitialThemeReducerState {
  mode: "dark" | "light"
}
const initialState: IInitialThemeReducerState = {
  mode: "light"
}

const themeReducer = (
  state: IInitialThemeReducerState = initialState,
  action?: ThemeAction
) => {
  switch (action?.type) {
    case ThemeActionTypes.DARK_MODE:
      return {
        ...state,
        mode: "dark"
      }
    case ThemeActionTypes.LIGHT_MODE:
      return {
        ...state,
        mode: "light"
      }
    default:
      return state;
  }
}

export default themeReducer;