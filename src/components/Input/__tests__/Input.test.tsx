import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import Input, { IInputProps } from "..";

const setUp = (props: IInputProps): ShallowWrapper => {
  const wrapper = shallow(<Input {...props} />)
  return wrapper;
}

describe("<Input /> rendering", () => {
  test("render <input /> component when type is different from `textarea`", () => {
    const props: IInputProps = {
      name: "test",
      onChange: jest.fn(),
    } 
    const wrapper = setUp(props);
    const textarea = findByTestAttr(wrapper, "textarea");
    const input = findByTestAttr(wrapper, "input");
    expect(textarea.length).toBe(0);
    expect(input.length).toBe(1)
  })
  test("render <textarea /> component when type is `textarea`", () => {
    const props: IInputProps = {
      name: "test",
      onChange: jest.fn(),
      type: "textarea"
    } 
    const wrapper = setUp(props);
    const textarea = findByTestAttr(wrapper, "textarea");
    const input = findByTestAttr(wrapper, "input");
    expect(textarea.length).toBe(1);
    expect(input.length).toBe(0)
  })
  test("render error message when have error", () => {
    const props: IInputProps = {
      name: "test",
      onChange: jest.fn(),
      error: "test"
    } 
    const wrapper = setUp(props);
    const error = findByTestAttr(wrapper, "error");
    expect(error.text()).toBe(props.error)
  })
  test("render correct name", () => {
    const props: IInputProps = {
      name: "test",
      onChange: jest.fn(),
    } 
    const wrapper = setUp(props);
    const input = findByTestAttr(wrapper, "input");
    expect(input.prop("name")).toBe(props.name);
  })
  test("render correct initial value", () => {
    const props: IInputProps = {
      name: "test",
      value: "initial value",
      onChange: jest.fn(),
    } 
    const wrapper = setUp(props);
    const input = findByTestAttr(wrapper, "input");
    expect(input.prop("value")).toBe(props.value);
  })
})
describe("<Input /> interactions", () => {
  test("call onChange function with correct name and value", () => {
    const name = "name test";
    const props: IInputProps = {
      name, 
      onChange: jest.fn()
    }
    const wrapper = setUp(props);
    const input = findByTestAttr(wrapper, "input");
    const targetValue = "Hello World";
    input.simulate("change", {
      target: { value: targetValue }
    })
    expect(props.onChange).toHaveBeenCalledWith({
      name,
      value: targetValue
    })
  })
})

