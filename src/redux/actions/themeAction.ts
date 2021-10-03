import { ThemeActionTypes } from "../action-types";

interface IDarkMode {
  type: ThemeActionTypes.DARK_MODE,
}

interface ILightMode {
  type: ThemeActionTypes.LIGHT_MODE,
}

export type ThemeAction = IDarkMode | ILightMode;