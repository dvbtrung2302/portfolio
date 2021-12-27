import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import AboutMe, { IAboutMeProps } from "..";
import { INFO } from "constants/global";

const setUp = (props?: IAboutMeProps): ShallowWrapper => {
  const wrapper = shallow(<AboutMe {...props} />)
  return wrapper;
}

describe("<AboutMe /> rendering", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setUp()
  })
  test("render About Me without errors", () => {
    const aboutMe = findByTestAttr(wrapper, "about-me");
    expect(aboutMe.length).toBe(1)
  })
  test("render About Me Description without errors", () => {
    const aboutMeDescription = findByTestAttr(wrapper, "about-me-description");
    expect(aboutMeDescription.length).toBe(1)
  })
  test("render Download CV Button without errors", () => {
    const downloadCVButton = findByTestAttr(wrapper, "download-cv-button");
    expect(downloadCVButton.length).toBe(1)
  })
  test("renders correctly skill list length", () => {
    const skillList = findByTestAttr(wrapper, "skill-list");
    expect(skillList.children().length).toBe(INFO.skills.length);
  });
  test("renders correctly achievement list length", () => {
    const achievementList = findByTestAttr(wrapper, "achievement-list");
    expect(achievementList.children().length).toBe(INFO.achivements.length);
  });
})

