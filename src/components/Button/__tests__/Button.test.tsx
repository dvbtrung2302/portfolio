import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import Button, { IButtonProps} from "..";

const setUp = (props?: IButtonProps): ShallowWrapper => {
  const wrapper = shallow(<Button {...props}>{props?.children}</Button>)
  return wrapper;
}

describe("<Button /> rendering", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setUp({
      children: "Test button"
    })
  })
  test("render Button without errros", () => {
    const button = findByTestAttr(wrapper, "button");
    expect(button.length).toBe(1);
  })
  test("render Button atleast 1 children", () => {
    const button = findByTestAttr(wrapper, "button");
    expect(button.children().length).not.toBe(0);
  })
})

describe("<Button /> interactions", () => {
  let wrapper: ShallowWrapper;
  const mockCallBack = jest.fn();
  beforeEach(() => {
    wrapper = setUp({
      children: "Test button",
      onClick: mockCallBack
    })
  })

  test("Button clicked", () => {
    const button = findByTestAttr(wrapper, "button"); 
    button.simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  })
})
