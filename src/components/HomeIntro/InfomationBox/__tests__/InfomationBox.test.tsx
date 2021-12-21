import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import InfomationBox, { IInfomationBoxProps } from "..";
import { INFO } from "components/Sidebar/constants";

const setUp = (props?: IInfomationBoxProps): ShallowWrapper => {
  const wrapper = shallow(<InfomationBox {...props} />)
  return wrapper;
}

describe("<InfomationBox /> rendering", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => wrapper = setUp())
  test("render InfomationBox without errros", () => {
    const infomationBox = findByTestAttr(wrapper, "infomation-box");
      expect(infomationBox.length).toBe(1);
  })

  test("render Avatar without errros", () => {
    const avatar = findByTestAttr(wrapper, "avatar");
      expect(avatar.length).toBe(1);
  })

  test("render Name without errros", () => {
    const name = findByTestAttr(wrapper, "name");
      expect(name.length).toBe(1);
  })

  test("render Job without errros", () => {
    const job = findByTestAttr(wrapper, "job");
      expect(job.length).toBe(1);
  })

  test("renders correctly list socials length", () => {
    const socialList = findByTestAttr(wrapper, "social-list");
    expect(socialList.children().length).toBe(INFO.socials.length);
  });
})
