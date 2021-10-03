import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore, { MockStore } from "redux-mock-store";

import { BrowserRouter as Router} from 'react-router-dom';
import { findByTestAttr } from "test/testUtils";
import store from "redux/store";
import App from "App";

const mockStore = configureMockStore([]);

const setUp = (initialStore?: MockStore): ReactWrapper => {
  const wrapper = mount(
    <Router>
      <Provider store={initialStore || store}>
        <App />
      </Provider>
    </Router>
  )
  return wrapper;
}

test("renders without errors", () => {
  const wrapper: ReactWrapper = setUp();
  const app = findByTestAttr(wrapper, "app");
  expect(app.length).toBe(1);
});

test("renders correctly styles with theme mode", () => {
  const theme = {
    mode: "dark"
  }
  const initialStore = mockStore({ theme })
  const wrapper: ReactWrapper = setUp(initialStore);
  const app = findByTestAttr(wrapper, "app");
  
  const expectedClassName = `app-theme app ${theme.mode}`;
  expect(app.prop("className")).toBe(expectedClassName);
});
