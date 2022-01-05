import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import CategoryTabs, { ICategoryTabsProps } from "..";
import { CATEGORY_TYPE } from "constants/global";

const setUp = (props: ICategoryTabsProps): ShallowWrapper => {
  const wrapper = shallow(<CategoryTabs {...props}/>)
  return wrapper;
}

describe("<CategoryTabs /> rendering", () => {
  let wrapper: ShallowWrapper;
  const props = {
    currentCategory: "all"
  }
  beforeEach(() => {
    wrapper = setUp(props);
  })
  test("render Category Tabs withouth errors", () => {
    const categoryTabs = findByTestAttr(wrapper, "category-tabs");
    expect(categoryTabs.length).toBe(1);
  })
  test("render correctly list tab item length", () => {
    const categoryTabs = findByTestAttr(wrapper, "category-tabs");
    expect(categoryTabs.children().length).toBe(Object.keys(CATEGORY_TYPE).length);
  })
  test("render correctly tab item style when active", () => {
    const tab = findByTestAttr(wrapper, `category-tab-${props.currentCategory}`);
    const expectedClassName = "item active"
    expect(tab.prop("className")).toBe(expectedClassName);
  })
})

describe("<CategoryTabs /> interactions", () => {
  let wrapper: ShallowWrapper;
  const props = {
    currentCategory: "all",
    onCategoryClick: jest.fn()
  }
  beforeEach(() => {
    wrapper = setUp(props);
  })
  test("onCategoryClick have been called when clicked tab item", () => {
    const targetTab = "cxm";
    const tab = findByTestAttr(wrapper, `category-tab-${targetTab}`);
    tab.simulate("click");
    expect(props.onCategoryClick).toHaveBeenCalledWith(targetTab)
  })
})