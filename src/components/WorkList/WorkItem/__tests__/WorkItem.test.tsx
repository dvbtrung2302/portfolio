import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import WorkItem, { IWorkItemProps } from "..";
import { INFO } from "constants/global";

const setUp = (props: IWorkItemProps): ShallowWrapper => {
  const wrapper = shallow(<WorkItem {...props} />)
  return wrapper;
}

describe("<WorkItem /> rendering", () => {
  let wrapper: ShallowWrapper;
  const props = { ...INFO.projects[0] }
  beforeEach(() => {
    wrapper = setUp(props)
  })
  test("render Work Item without errors", () => {
    const workItem = findByTestAttr(wrapper, "work-item");
    expect(workItem.length).toBe(1)
  })
  test("render Work Item Name without errors", () => {
    const workItemName = findByTestAttr(wrapper, "work-item-name");
    expect(workItemName.length).toBe(1)
  })
  test("render Work Item Logo without errors", () => {
    const workItemLogo = findByTestAttr(wrapper, "work-item-logo");
    expect(workItemLogo.length).toBe(1)
  })
  test("render Work Item Category without errors", () => {
    const workItemCategory = findByTestAttr(wrapper, "work-item-category");
    expect(workItemCategory.length).toBe(1)
  })
})  
describe("<WorkItem /> interactions", () => {
  let wrapper: ShallowWrapper;
  const props = { ...INFO.projects[0] }
  beforeEach(() => {
    wrapper = setUp(props)
  })
  test("open popup when clicked", () => {
    const boxWrapper = findByTestAttr(wrapper, "box-wrapper");
    boxWrapper.simulate("click");
    const projectDetailPopup = findByTestAttr(wrapper, "project-detail-popup");
    expect(projectDetailPopup.prop("isOpen")).toBe(true)
  })
})