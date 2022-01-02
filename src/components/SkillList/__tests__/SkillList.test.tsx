import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import { INFO } from "constants/global";
import SkillList, { ISkillListProps } from "..";

const setUp = (props?: ISkillListProps): ShallowWrapper => {
  const wrapper = shallow(<SkillList {...props} />)
  return wrapper;
}

describe("<SkillItem /> rendering", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setUp();
  })
  test("render Skill List without errors", () => {
    const skillList = findByTestAttr(wrapper, "skill-list");
    expect(skillList.length).toBe(1);
  })
  test("renders correctly list skill item length", () => {
    const skillList = findByTestAttr(wrapper, "skill-list");
    expect(skillList.children().length).toBe(INFO.techSkills.length);
  })
});
