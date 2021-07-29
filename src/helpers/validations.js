const isEmailInvalid = (value) => {
  const pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
  );
  if (!pattern.test(value)) {
    return `Email adress isn't valid`;
  } else {
    return null;
  }
};

const isPasswordInvalid = (value) => {
  if (value.trim().length < 7) {
    return 'Password needs to have at least seven characters';
  }
  if (!/\d/.test(value)) {
    return 'Password must contain at least one digit';
  }
  if (value.trim() === '') {
    return "Field can't be empty";
  }

  return null;
};

const isEmpty = (value) => {
  if (value.trim() === '') {
    return `Field can't be empty`;
  } else {
    return null;
  }
};

export { isEmailInvalid, isPasswordInvalid, isEmpty };
