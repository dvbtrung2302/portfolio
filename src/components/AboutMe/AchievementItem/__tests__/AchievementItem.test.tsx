import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import AchievementItem, { IAchievementItemProps } from "..";

const setUp = (props: IAchievementItemProps): ShallowWrapper => {
  const wrapper = shallow(<AchievementItem {...props} />)
  return wrapper;
}

describe("<AchievementItem /> rendering", () => {
  let wrapper: ShallowWrapper;
  const props: IAchievementItemProps = {
    icon: "fas fa-user",
    amount: "20+",
    name: "test"
  }
  beforeEach(() => {
    wrapper = setUp(props)
  })
  test("render Achievement Item without errors", () => {
    const achievementItem = findByTestAttr(wrapper, "achievement-item");
    expect(achievementItem.length).toBe(1)
  })
  test("render Achievement Icon without errors", () => {
    const achievementIcon = findByTestAttr(wrapper, "achievement-icon");
    expect(achievementIcon.length).toBe(1)
  })
  test("render Achievement Name without errors", () => {
    const achievementName = findByTestAttr(wrapper, "achievement-name");
    expect(achievementName.length).toBe(1)
  })
  test("render Achievement Amount without errors", () => {
    const achievementAmount = findByTestAttr(wrapper, "achievement-amount");
    expect(achievementAmount.length).toBe(1)
  })
})

