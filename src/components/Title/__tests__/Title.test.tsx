import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore, { MockStore } from "redux-mock-store";

import { findByTestAttr } from "test/testUtils";
import Title, { ITitleProps } from "..";
import store from "redux/store";

const mockStore = configureMockStore([]);

const setUp = (props: ITitleProps, initialStore?: MockStore): ReactWrapper => {
  const wrapper = mount(
    <Provider store={initialStore || store}>
      <Title {...props} />
    </Provider>
  )
  return wrapper;
}

describe("<Title /> rendering", () => {
  const text = "Test title";
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = setUp({ text });
  })

  test("renders without errors", () => {
    const title = findByTestAttr(wrapper, "title");
    expect(title.length).toBe(1);
  });
  
  test("renders exactly children", () => {
    const titleText = findByTestAttr(wrapper, "title-text");
    const expectedText = "Test title"
    expect(titleText.text()).toBe(expectedText)
  });

  test("render exactly Title Icon when change page mode", () => {
    const theme = {
      mode: "dark"
    }
    const initialStore = mockStore({ ...store.getState(), theme }) 
    const wrapper: ReactWrapper = setUp( { text }, initialStore) 
    const titleIcon = findByTestAttr(wrapper, "title-icon");

    const expectedSrc = `/images/title-icon-${theme.mode}.svg`;
    expect(titleIcon.prop("src")).toBe(expectedSrc)
  })
})
