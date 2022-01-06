import { checkIsEmail, validateField, validateForm } from "utils/functions";

describe("checkIsEmail", () => {
  test("return 'true' if have correct email format", () => {
    const email = "test@gmail.com";
    expect(checkIsEmail(email)).toBe(true);
  })
  test("return `false` when have incorrect email format", () => {
    const email = "test.com";
    expect(checkIsEmail(email)).toBe(false);
  })
})
describe("validateForm", () => {
  test("return `valid = false` and correctly `newErrros` if form is invalid", () => {
    const requiredMessage = "This field is required.";
    const fieldName = "name";
    const validateSchema = {
      [fieldName]: {
        required: {
          value: true,
          message: requiredMessage
        },
      },
    }
    const values = { 
      [fieldName]: ""
    }
    const { valid, newErrors } = validateForm(validateSchema, values);
    expect(valid).toBe(false);
    expect(newErrors).toEqual({
      [fieldName]: requiredMessage
    });
  })
  test("return `valid = true` and empty `newErrros` if form is valid", () => {
    const requiredMessage = "This field is required.";
    const fieldName = "name";
    const validateSchema = {
      [fieldName]: {
        required: {
          value: true,
          message: requiredMessage
        },
      },
    }
    const values = { 
      [fieldName]: "have content"
    }
    const { valid, newErrors } = validateForm(validateSchema, values);
    expect(valid).toBe(true);
    expect(newErrors).toEqual({});
  })
  test("return `valid = false` and correctly `newErrros` if form is have incorrect email format", () => {
    const invalidEmailMessage = "Wrong email format.";
    const fieldName = "email";
    const validateSchema = {
      [fieldName]: {
        isEmail: {
          isValid: (value: string) => checkIsEmail(value),
          message: invalidEmailMessage
        },
      },
    }
    const values = { 
      [fieldName]: "abcxyz"
    }
    const { valid, newErrors } = validateForm(validateSchema, values);
    expect(valid).toBe(false);
    expect(newErrors).toEqual({
      [fieldName]: invalidEmailMessage
    });
  })
  test("return `valid = true` and empty `newErrros` if form is have correct email format", () => {
    const invalidEmailMessage = "Wrong email format.";
    const fieldName = "email";
    const validateSchema = {
      [fieldName]: {
        isEmail: {
          isValid: (value: string) => checkIsEmail(value),
          message: invalidEmailMessage
        },
      },
    }
    const values = { 
      [fieldName]: "abcxyz@gmail.com"
    }
    const { valid, newErrors } = validateForm(validateSchema, values);
    expect(valid).toBe(true);
    expect(newErrors).toEqual({});
  })
})
describe("validateField", () => {
  test("return empty `errorMessage` if field is valid", () => {
    const requiredMessage = "This field is required.";
    const fieldValidateSchema = {
      required: {
        value: true,
        message: requiredMessage
      },
    }
    const value = "have content";
    const errorMessage = validateField(fieldValidateSchema, value);
    expect(errorMessage).toBe("");
  })
  test("return correctly `errorMessage` if field is invalid", () => {
    const requiredMessage = "This field is required.";
    const fieldValidateSchema = {
      required: {
        value: true,
        message: requiredMessage
      },
    }
    const value = "";
    const errorMessage = validateField(fieldValidateSchema, value);
    expect(errorMessage).toBe(requiredMessage);
  })
})

