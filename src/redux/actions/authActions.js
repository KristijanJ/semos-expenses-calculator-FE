export const authenticateUser = (user, type) => {
  if (type === 'Login') {
    return loginUser(user);
  } else {
    return registerUser(user);
  }
}

export const loginUser = (user) => {
  return {
    type: "LOGIN_USER",
    payload: user
  }
}

export const registerUser = (user) => {
  return {
    type: "REGISTER_USER",
    payload: user
  }
}