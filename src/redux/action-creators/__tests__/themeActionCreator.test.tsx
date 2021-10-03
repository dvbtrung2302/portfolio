import { ThemeActionTypes } from "redux/action-types";
import { toggleMode } from "..";


describe("toggleMode", () => {
  test("returns an correct action with type is a target theme mode", () => {
    const action = toggleMode(ThemeActionTypes.DARK_MODE)
    const expectedAction = {
      type: ThemeActionTypes.DARK_MODE
    }
    expect(action).toEqual(expectedAction);
  })
})