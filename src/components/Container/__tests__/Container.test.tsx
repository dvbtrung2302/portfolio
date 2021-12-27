import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import Container, { IContainerProps } from "..";

const setUp = (props: IContainerProps): ShallowWrapper => {
  const wrapper = shallow(<Container {...props} />)
  return wrapper;
}

describe("<Container /> rendering", () => {
  const children = <div>Test children</div>;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = setUp({ children });
  })

  test("renders without errors", () => {
    const container = findByTestAttr(wrapper, "container");
    expect(container.length).toBe(1);
  });
  
  test("renders exactly children", () => {
    const container = findByTestAttr(wrapper, "container");
    const expectedString = "Test children"
    expect(container.children().text()).toBe(expectedString)
  });
})
