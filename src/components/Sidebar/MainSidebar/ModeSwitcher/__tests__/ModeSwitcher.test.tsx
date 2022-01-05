import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore, { MockStore } from "redux-mock-store";

import { findByTestAttr } from "test/testUtils";
import ModeSwitcher from "..";
import store from "redux/store";

const mockStore = configureMockStore([]);

const setUp = (initialStore?: MockStore): ReactWrapper => {
  const wrapper = mount(
    <Provider store={initialStore || store}>
      <ModeSwitcher />
    </Provider>
  )
  return wrapper;
}

test("renders without errors", () => {
  const wrapper: ReactWrapper = setUp();
  const modeSwitcher = findByTestAttr(wrapper, "mode-switcher");
  expect(modeSwitcher.length).toBe(1);
});

test("renders correctly styles with initial mode", () => {
  const theme = {
    mode: "light"
  }
  const initialStore = mockStore({ theme })
  const wrapper: ReactWrapper = setUp(initialStore);
  const modeSwitcher = findByTestAttr(wrapper, "mode-switcher");
  
  const expectedClassName = "root";
  expect(modeSwitcher.prop("className")).toBe(expectedClassName);
});

test("renders correctly icon when change mode", () => {
  const theme = {
    mode: "dark"
  }
  const initialStore = mockStore({ theme })
  const wrapper: ReactWrapper = setUp(initialStore);
  const modeSwitcher = findByTestAttr(wrapper, "mode-switcher");
  modeSwitcher.simulate("click");

  const expectedClassName = `fas fa-${theme.mode === "dark" ? "moon" : "sun"}`
  const icon = findByTestAttr(wrapper, "mode-switcher-icon");
  expect(icon.prop("className")).toBe(expectedClassName);
});
