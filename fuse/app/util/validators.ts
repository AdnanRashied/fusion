export const required = (value: string, message = "This field is required") => {
  if (!value.trim()) {
    return message;
  }
  return undefined;
};

export const emailValidator = (
  value: string,
  message = "Please enter a valid email address"
) => {
  if (!/\S+@\S+\.\S+/.test(value)) {
    return message;
  }
  return undefined;
};

export const passwordValidator = (
  value: string,
  message = "Password is required"
) => {
  if (!value.trim()) {
    return message;
  }
  return undefined;
};
