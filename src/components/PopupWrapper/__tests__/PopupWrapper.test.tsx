import { mount, ReactWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import PopupWrapper, { PopupWrapperProps } from "..";

const setUp = (props?: PopupWrapperProps): ReactWrapper => {
  const wrapper = mount(<PopupWrapper {...props}>{props?.children}</PopupWrapper>)
  return wrapper;
}

describe("<PopupWrapper /> rendering", () => {
  let wrapper: ReactWrapper;
  const props = {
    onClose: jest.fn, 
    isOpen: true,
    children: "Test"
  }
  beforeEach(() => {
    wrapper = setUp(props);
  })
  test("render Popup Wrapper withouth errors", () => {
    const popupWrapper = findByTestAttr(wrapper, "popup-wrapper");
    expect(popupWrapper.length).toBe(1);
  })
  test("render correctly style when open", () => {
    const popupWrapper = findByTestAttr(wrapper, "popup-wrapper");
    const expectedClassName = "root activeRoot";
    expect(popupWrapper.prop("className")).toBe(expectedClassName);
  })
  test("render Popup Wrapper Content withouth errors", () => {
    const popupWrapperContent = findByTestAttr(wrapper, "popup-wrapper-content");
    expect(popupWrapperContent.length).toBe(1);
  })
  test("render Popup Wrapper Overlay withouth errors", () => {
    const popupWrapperOverlay = findByTestAttr(wrapper, "popup-wrapper-overlay");
    expect(popupWrapperOverlay.length).toBe(1);
  })
})

describe("<CategoryTabs /> interactions", () => {
  let wrapper: ReactWrapper;
  const props = {
    onClose: jest.fn(), 
    isOpen: true,
    children: "Test"
  }
  beforeEach(() => {
    wrapper = setUp(props);
  })
  test("call onClose Function when click outside", () => {
    const popupWrapperOverlay = findByTestAttr(wrapper, "popup-wrapper-overlay");
    popupWrapperOverlay.simulate("click");
    expect(props.onClose).toHaveBeenCalled()
  })
  test("call onClose Function when press Escape", () => {
    const map: {[type: string]: any } = {}
    document.addEventListener = jest.fn((e, cb) => {
      map[e] = cb
    })
    wrapper = setUp(props);
    map.keydown({ key: "Escape" })
    expect(props.onClose).toHaveBeenCalled()
  })
})