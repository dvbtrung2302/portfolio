import { INFO } from "constants/global";
import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import ProjectImage, { IProjectImageProps } from "..";

const setUp = (props: IProjectImageProps): ShallowWrapper => {
  const wrapper = shallow(<ProjectImage {...props} />)
  return wrapper;
}

describe("<ProjectImage /> rendering", () => {
  let wrapper: ShallowWrapper;
  const props = {
    src: "/images/light-logo.svg",
    alt: "Hello word!",
    type: "mobile"
  }
  beforeEach(() => {
    wrapper = setUp(props);
  })
  test("render Project Image withouth errors", () => {
    const projectImage = findByTestAttr(wrapper, "project-image");
    expect(projectImage.length).toBe(1);
  })
  test("render correctly style with type is `mobile`", () => {
    const projectImage = findByTestAttr(wrapper, "project-image");
    const expectedClassName = "root mobile"
    expect(projectImage.prop("className")).toBe(expectedClassName);
  })
})