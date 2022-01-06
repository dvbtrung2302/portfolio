export const validateForm = (
  validateSchema: { [type: string]: any },
  values: { [type: string]: string },
): {
  valid: boolean,
  newErrors: { [type: string]: string }
} => {
  let valid = true;
  const newErrors: { [type: string]: string } = {};
  for (const key in validateSchema) {
    const value = values[key];
    const validation = validateSchema[key];

    if (validation?.required?.value && !value) {
      valid = false;
      newErrors[key] = validation?.required?.message;
    }
    if (value && validation?.isEmail && !validation?.isEmail?.isValid(value)) {
      valid = false;
      newErrors[key] = validation?.isEmail?.message;
    }
  }
  return {
    valid,
    newErrors
  }
}
export const validateField = (
  fieldValidateSchema: { [type: string]: any },
  value: string,
) => {
  let errorMessage = "";
  if (fieldValidateSchema?.required?.value && !value) {
    errorMessage = fieldValidateSchema?.required?.message;
  }
  if (value && fieldValidateSchema?.isEmail && !fieldValidateSchema?.isEmail?.isValid(value)) {
    errorMessage = fieldValidateSchema?.isEmail?.message;
  }
  return errorMessage;
}
export const checkIsEmail = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
