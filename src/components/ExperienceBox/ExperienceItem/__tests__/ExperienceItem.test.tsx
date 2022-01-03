import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import ExperienceItem, { IExperienceItemProps } from "..";
import { INFO } from "constants/global";

const setUp = (props: IExperienceItemProps): ShallowWrapper => {
  const wrapper = shallow(<ExperienceItem {...props} />)
  return wrapper;
}

describe("<ExperienceItem /> rendering", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setUp(INFO.works[0]);
  })
  test("render Experience Item without errors", () => {
    const experienceItem = findByTestAttr(wrapper, "experience-item");
    expect(experienceItem.length).toBe(1)
  })
  test("render Experience Time without errors", () => {
    const experienceTime = findByTestAttr(wrapper, "experience-time");
    expect(experienceTime.length).toBe(1)
  })
  test("render Experience Title without errors", () => {
    const experienceTitle = findByTestAttr(wrapper, "experience-title");
    expect(experienceTitle.length).toBe(1)
  })
  test("render Experience Description without errors", () => {
    const experienceDescription = findByTestAttr(wrapper, "experience-description");
    expect(experienceDescription.length).toBe(1)
  })
  test("render Experience Icon without errors", () => {
    const experienceIcon = findByTestAttr(wrapper, "experience-icon");
    expect(experienceIcon.length).toBe(1)
  })
})
