import { ThemeActionTypes } from "../action-types"
import { ThemeAction } from "../actions"

export const toggleMode = (mode: ThemeActionTypes): ThemeAction => {
  return {
    type: mode
  }
}