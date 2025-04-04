export const Blur = (name: string, value: string | number | any) => {
  let error = '';
  const DisplayName = FormattedName(name);
  error = value.trim() === '' ? `${DisplayName} is required` : '';
  return error;
};

export const FormattedName = (name: string) => {
  const formattedName = name
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase()
    .replace(/^./, (str: any) => str.toUpperCase());
  return formattedName;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  const domainPart = email.split('@')[1];
  if (domainPart.includes('..')) {
    return false;
  }

  return true;
};

export const validatePassword = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};
