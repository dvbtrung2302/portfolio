import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import ExperienceBox, { IExperienceBoxProps } from "..";
import { INFO } from "constants/global";

const setUp = (props: IExperienceBoxProps): ShallowWrapper => {
  const wrapper = shallow(<ExperienceBox {...props} />)
  return wrapper;
}

describe("<ExperienceList /> rendering", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setUp({ items: INFO.works });
  })
  test("render Experience Box without errors", () => {
    const experienceBox = findByTestAttr(wrapper, "experience-box");
    expect(experienceBox.length).toBe(1)
  })
  test("render Experience List without errors", () => {
    const experienceList = findByTestAttr(wrapper, "experience-list");
    expect(experienceList.length).toBe(1)
  })
  test("render Line without errors", () => {
    const line = findByTestAttr(wrapper, "line");
    expect(line.length).toBe(1)
  })
  test("renders correctly list experience item length", () => {
    const experienceList = findByTestAttr(wrapper, "experience-list");
    expect(experienceList.children().length).toBe(INFO.works.length)
  })
})
