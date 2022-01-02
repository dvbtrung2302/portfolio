import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import { INFO } from "constants/global";
import SkillItem, { ISkillItemProps } from "..";

const setUp = (props: ISkillItemProps): ShallowWrapper => {
  const wrapper = shallow(<SkillItem {...props} />)
  return wrapper;
}

describe("<SkillItem /> rendering", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setUp({ ...INFO.techSkills[0] });
  })
  test("render Skill Item without errors", () => {
    const skillItem = findByTestAttr(wrapper, "skill-item");
    expect(skillItem.length).toBe(1)
  })
  test("render Skill Item Logo without errors", () => {
    const skillItemLogo = findByTestAttr(wrapper, "skill-item-logo");
    expect(skillItemLogo.length).toBe(1)
  })
  test("render Skill Item Name without errors", () => {
    const skillItemName = findByTestAttr(wrapper, "skill-item-name");
    expect(skillItemName.length).toBe(1)
  })
  test("render Skill Item Overlay without errors", () => {
    const skillItemOverlay = findByTestAttr(wrapper, "skill-item-overlay");
    expect(skillItemOverlay.length).toBe(1)
  })
});
