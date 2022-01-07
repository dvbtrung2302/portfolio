import { FormEvent, useCallback, useState } from "react";
import { validateField, validateForm } from "utils/functions";

interface IInitialState {
  errors: { [type: string]: string },
  values: { [type: string]: string },
}

interface IUseFormProps {
  initialState: IInitialState,
  validateSchema?: { [type: string]: any },
}

export interface IUseFormReturnValue {
  errors: { [type: string]: string },
  values: { [type: string]: string },
  handleChange: Function, 
  handleSubmit: Function,
}

const useForm = (props: IUseFormProps): IUseFormReturnValue => {
  const { initialState, validateSchema } = props;
  const [state, setState] = useState<IInitialState>(initialState);

  const handleChange = useCallback(({name, value}) => {
    if (validateSchema && validateSchema[name]) {
      const errorMessage = validateField(validateSchema[name], value)
      setState(prevState => ({
        ...prevState,
        values: {
          ...prevState.values,
          [name]: value
        },
        errors: {
          ...prevState.errors,
          [name]: errorMessage
        }
      }))
    } else {
      setState(prevState => ({
        ...prevState,
        values: {
          ...prevState.values,
          [name]: value
        }
      }))
    }
  }, [validateSchema])
  
  const preloadData = (): void => {
    setState(initialState);
  }

  const handleSubmit = (onSubmit: Function) => (e: FormEvent) => {
    e.preventDefault();

    if (validateSchema) {
      const { valid, newErrors } = validateForm(validateSchema, state.values);
      if (!valid) {
        setState(prevState => ({
          ...prevState,
          errors: newErrors
        }))
        return;
      }
    }
    onSubmit(preloadData)
  }

  return { 
    values: state.values,
    errors: state.errors, 
    handleChange, 
    handleSubmit,
  }
}

export default useForm;