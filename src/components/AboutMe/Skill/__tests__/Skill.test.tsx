import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import Skill, { ISkillProps } from "..";

const setUp = (props: ISkillProps): ShallowWrapper => {
  const wrapper = shallow(<Skill {...props} />)
  return wrapper;
}

describe("<Skill /> rendering", () => {
  let wrapper: ShallowWrapper;
  const props: ISkillProps = {
    skillName: "test",
    percent: 10,
    progressColor: "red",
  }
  beforeEach(() => {
    wrapper = setUp(props)
  })
  test("render Skill without errors", () => {
    const skillItem = findByTestAttr(wrapper, "skill-item");
    expect(skillItem.length).toBe(1)
  })
  test("render Skill Name without errors", () => {
    const skillName = findByTestAttr(wrapper, "skill-name");
    expect(skillName.length).toBe(1)
  })
  test("render Skill Progress without errors", () => {
    const skillProgress = findByTestAttr(wrapper, "skill-progress");
    expect(skillProgress.length).toBe(1)
  })
  test("render Skill Progress Bar without errors", () => {
    const skillProgressBar = findByTestAttr(wrapper, "skill-progress-bar");
    expect(skillProgressBar.length).toBe(1)
  })
  test("render Skill Progress Bar correct color", () => {
    const skillProgressBar = findByTestAttr(wrapper, "skill-progress-bar");
    const expectedColor = props.progressColor;
    expect(skillProgressBar.prop("style")).toHaveProperty('backgroundColor', expectedColor)
  })
  test("render Skill Progress Bar correct width", () => {
    const skillProgressBar = findByTestAttr(wrapper, "skill-progress-bar");
    const expectedWidth = `${props.percent}%`;
    expect(skillProgressBar.prop("style")).toHaveProperty('width', expectedWidth)
  })
})

