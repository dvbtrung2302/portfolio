import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import ParallaxBackground, { IParallaxBackgroundProps} from "..";

const setUp = (props?: IParallaxBackgroundProps): ShallowWrapper => {
  const wrapper = shallow(<ParallaxBackground {...props} />)
  return wrapper;
}

describe("<ParallaxBackground /> rendering", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setUp()
  })
  test("render ParallaxBackground without errros", () => {
    const parallaxBackground = findByTestAttr(wrapper, "parallax-background");
      expect(parallaxBackground.length).toBe(1);
  })
  test("renders correctly list parallax item", () => {
    const parallaxBackground = findByTestAttr(wrapper, "parallax-background");
    const expectedLength = 11;
    expect(parallaxBackground.children().length).toBe(expectedLength);
  });
})

describe("<ParallaxBackground /> props change", () => {
  let wrapper: ShallowWrapper;
  const coordinates = {
    x: 20,
    y: 20
  }
  beforeEach(() => {
    wrapper = setUp({ coordinates })
  })

  test("change style when have coordinates", () => {
    const firstParallaxItem = findByTestAttr(wrapper, "parallax-item-1");

    const expectedStyle = {
      transform: `translate(${coordinates.x}px, ${coordinates.y}px)`
    }

    expect(firstParallaxItem.prop("style")).toEqual(expectedStyle)
  })
})
