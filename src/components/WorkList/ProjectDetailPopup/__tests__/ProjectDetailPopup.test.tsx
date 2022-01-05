import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import ProjectDetailPopup, { IProjectDetailPopupProps } from "..";
import { INFO } from "constants/global";

const setUp = (props: IProjectDetailPopupProps): ShallowWrapper => {
  const wrapper = shallow(<ProjectDetailPopup  {...props} />)
  return wrapper;
}

describe("<ProjectDetailPopup /> rendering", () => {
  let wrapper: ShallowWrapper;
  const props = { ...INFO.projects[0] }
  beforeEach(() => {
    wrapper = setUp(props)
  })
  test("render Project Detail Popup without errors", () => {
    const projectDetailPopup = findByTestAttr(wrapper, "project-detail-popup");
    expect(projectDetailPopup.length).toBe(1)
  })
  test("render Project Name without errors", () => {
    const projectName = findByTestAttr(wrapper, "project-name");
    expect(projectName.length).toBe(1)
  })
  test("render Project Description without errors", () => {
    const projectDescription = findByTestAttr(wrapper, "project-description");
    expect(projectDescription.length).toBe(1)
  })
  test("render Project Technicals without errors", () => {
    const projectTechnicals = findByTestAttr(wrapper, "project-technicals");
    expect(projectTechnicals.length).toBe(1)
  })
  test("render Project Link without errors", () => {
    const projectLink = findByTestAttr(wrapper, "project-link");
    expect(projectLink.length).toBe(1)
  })
  test("not render Project Technicals if don't have", () => {
    const props = { ...INFO.projects[0], technicals: undefined }
    wrapper = setUp(props)
    const projectTechnicals = findByTestAttr(wrapper, "project-technicals");
    expect(projectTechnicals.length).toBe(0)
  })
  test("not render Project Link if don't have", () => {
    const props = { ...INFO.projects[0], link: undefined }
    wrapper = setUp(props)
    const projectLink = findByTestAttr(wrapper, "project-link");
    expect(projectLink.length).toBe(0)
  })
})  