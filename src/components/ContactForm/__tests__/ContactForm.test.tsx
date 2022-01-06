import { mount, ReactWrapper } from "enzyme";
import configureMockStore, { MockStore } from "redux-mock-store";
import { Provider } from "react-redux";

import { findByTestAttr } from "test/testUtils";
import ContactForm from "..";
import store from "redux/store";
import { FIELD_LIST } from "../constants";

const mockStore = configureMockStore([]);

const setUp = (initialStore?: MockStore): ReactWrapper => {
  const wrapper = mount(
    <Provider store={initialStore || store}>
      <ContactForm />
    </Provider>
  )
  return wrapper;
}

describe("<ContactForm /> rendering", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = setUp()
  })
  test("render Contact Form without errors", () => {
    const contactForm = findByTestAttr(wrapper, "contact-form");
    expect(contactForm.length).toBe(1)
  })
  test("render correctly map if current mode is dark", () => {
    const theme = {
      mode: "dark"
    }
    const initialStore = mockStore({ theme })
    const wrapper = setUp(initialStore);

    const mapImage = findByTestAttr(wrapper, "map-image");
    expect(mapImage.prop("src")).toBe(`/images/map-${theme.mode}.svg`)
  })
  test("render correctly field list length", () => {
    const field = findByTestAttr(wrapper, "field");
    expect(field.length).toBe(FIELD_LIST.length);
  })
})
describe("<ContactForm /> interactions", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = setUp()
  })
  test("check form submit", () => {
    const formEventMocked = { preventDefault: jest.fn() };
    const form = findByTestAttr(wrapper, "form");
    form.simulate("submit", formEventMocked);
    expect(formEventMocked.preventDefault).toHaveBeenCalled();
  })
  test("check form submit when button clicked", () => {
    const formEventMocked = { preventDefault: jest.fn() };
    const button = findByTestAttr(wrapper, "form-button");
    button.simulate("submit", formEventMocked);
    expect(formEventMocked.preventDefault).toHaveBeenCalled();
  })
})