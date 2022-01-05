import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import ProjectImageSlide, { IProjectImageSlideProps } from "..";
import { INFO } from "constants/global";

const setUp = (props: IProjectImageSlideProps): ShallowWrapper => {
  const wrapper = shallow(<ProjectImageSlide {...props} />)
  return wrapper;
}

// const mountSetUp = (props: IProjectImageSlideProps): ReactWrapper => {
//   const wrapper = mount(<ProjectImageSlide {...props} />)
//   return wrapper;
// }

describe("<ProjectImageSlide /> rendering", () => {
  let wrapper: ShallowWrapper;
  const props = {
    items: INFO.projects[0].images
  }
  beforeEach(() => {
    wrapper = setUp(props);
  })
  test("render Project Image Slide withouth errors", () => {
    const projectImageSlide = findByTestAttr(wrapper, "project-image-slide");
    expect(projectImageSlide.length).toBe(1)
  })
  test("render correctly slide item length", () => {
    const projectImageSlideList = findByTestAttr(wrapper, "project-image-slide-list");
    expect(projectImageSlideList.children().length).toBe(INFO.projects[0].images.length)
  })
})

// describe("<ProjectImageSlide /> interactions", () => {
//   let mountWrapper: ReactWrapper;
//   const props = {
//     items: INFO.projects[0].images
//   }
//   beforeEach(() => {
//     mountWrapper = mountSetUp(props);
//   })
//   test("change slide when clicked arrow", () => {

//     const currentSlide = findByTestAttr(mountWrapper, "current-slide");
//     console.log(currentSlide.debug())
//   })
// })
