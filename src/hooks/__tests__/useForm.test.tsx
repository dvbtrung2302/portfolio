import { shallow, ShallowWrapper } from "enzyme";
import useForm, { IUseFormReturnValue } from "hooks/useForm";
import { findByTestAttr } from "test/testUtils";

interface IHookWrapperProps {
  hook?: Function
}

function HookWrapper(props: IHookWrapperProps) {
  const hook: IUseFormReturnValue = props.hook ? props.hook() : undefined;
  return <div data-test="hook-wrapper" data-hook={hook}></div>;
}

const setUp = (props?: IHookWrapperProps): ShallowWrapper => {
  const wrapper = shallow(<HookWrapper {...props} />)
  return wrapper;
}

const fieldName = "fieldName";
const validateSchema: {[type: string]: any} = {
  [fieldName]: {
    required: {
      value: true,
      message: "This field is required."
    },
  },
} 

describe("useForm", () => {
  test("set the right values and errros", () => {
    // setup
    const initialState = {
      errors: {
        [fieldName]: "",
      },
      values: {
        [fieldName]: "",
      },
    };
    const props = {
      hook: () => useForm({
        initialState,
      })
    }
    const wrapper = setUp(props);
    const hookWrapper = findByTestAttr(wrapper, "hook-wrapper");
    const hook: IUseFormReturnValue = hookWrapper.prop("data-hook");
    const {
      values,
      errors
    } = hook;

    // assertions / expectes
    expect(values).toEqual(initialState.values);
    expect(errors).toEqual(initialState.errors);
  });
  test("onSubmit have been call", () => {
    // setup
    const initialState = {
      errors: {
        [fieldName]: "",
      },
      values: {
        [fieldName]: "",
      },
    };
    const props = {
      hook: () => useForm({
        initialState,
      })
    }
    const wrapper = setUp(props);
    const hookWrapper = findByTestAttr(wrapper, "hook-wrapper");
    const hook: IUseFormReturnValue = hookWrapper.prop("data-hook");
    const {
      handleSubmit
    } = hook;

    // work
    const onSubmit = jest.fn();
    handleSubmit(onSubmit)({ preventDefault: jest.fn() });

     // assertions / expectes
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledTimes(1);
  })
  test("not call onSubmit if have invalid field", () => {
    // setup
    const initialState = {
      errors: {
        [fieldName]: "",
      },
      values: {
        [fieldName]: "",
      },
    };
    const props = {
      hook: () => useForm({
        initialState,
        validateSchema
      })
    }
    const wrapper = setUp(props);
    const hookWrapper = findByTestAttr(wrapper, "hook-wrapper");
    const hook: IUseFormReturnValue = hookWrapper.prop("data-hook");
    const {
      handleSubmit
    } = hook;

    // work
    const onSubmit = jest.fn();
    handleSubmit(onSubmit)({ preventDefault: jest.fn() });

     // assertions / expectes
    expect(onSubmit).not.toHaveBeenCalled();
  })
  test("return correct errors when have invalid field", () => {
    // setup
    const initialState = {
      errors: {
        [fieldName]: "",
      },
      values: {
        [fieldName]: "have name value",
      },
    };
    const props = {
      hook: () => useForm({
        initialState,
        validateSchema
      })
    }
    const wrapper = setUp(props);
    const hookWrapper = findByTestAttr(wrapper, "hook-wrapper");
    const hook: IUseFormReturnValue = hookWrapper.prop("data-hook");
    const {
      handleChange,
    } = hook;

    // work
    handleChange({ name: fieldName, value: ""});
 
    const updatedHook: IUseFormReturnValue = wrapper.prop("data-hook");
    const {
      values,
      errors
    } = updatedHook;

    const expectedValues = {
      [fieldName]: ""
    }
    const expectedErrors = {
      [fieldName]: validateSchema[fieldName].required.message
    }

     // assertions / expectes
    expect(values).toEqual(expectedValues);
    expect(errors).toEqual(expectedErrors);
  })
});