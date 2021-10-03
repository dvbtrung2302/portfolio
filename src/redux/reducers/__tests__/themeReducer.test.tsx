import { ThemeActionTypes } from "../../action-types";
import themeReducer, { IInitialThemeReducerState } from "../themeReducer";

test("return initial state of `{mode: 'light'}`", () => {
  const newState = themeReducer(undefined);
  const expectedState: IInitialThemeReducerState = {
    mode: "light"
  }
  expect(newState).toEqual(expectedState);
})

test("return state of `{mode: 'dark'}` upon receiving an action of type `DARK_MODE`", () => {
  const newState =  themeReducer(undefined, { type: ThemeActionTypes.DARK_MODE });
  const expectedState: IInitialThemeReducerState = {
    mode: "dark"
  }
  expect(newState).toEqual(expectedState);
})