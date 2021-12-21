import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr } from "test/testUtils";
import HomeIntro, { IHomeIntroProps} from "..";

const setUp = (props?: IHomeIntroProps): ShallowWrapper => {
  const wrapper = shallow(<HomeIntro {...props} />)
  return wrapper;
}

describe("<HomeIntro /> rendering", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setUp()
  })
  test("render HomeIntro without errros", () => {
    const homeIntro = findByTestAttr(wrapper, "home-intro");
    expect(homeIntro.length).toBe(1);
  })
})

describe("<HomeIntro /> interactions", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setUp()
  })

  test("change coordinates when mouse move", () => {
    const pageX = 10; 
    const pageY = 10;
    const homeIntro = findByTestAttr(wrapper, "home-intro");
    homeIntro.simulate("mousemove", { pageX, pageY });

    const parallaxBackground = findByTestAttr(wrapper, "parallax-background");

    const x = (window.innerWidth - pageX) / 15;
    const y = (window.innerHeight - pageY) / 15;

    const expectedCoordinates= { x, y }
    expect(parallaxBackground.prop("coordinates")).toEqual(expectedCoordinates)
  })
})
