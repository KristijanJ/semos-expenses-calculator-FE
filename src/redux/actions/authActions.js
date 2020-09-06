export const authenticateUser = (user, type) => {
  if (type === 'LOGIN') {
    return loginUser(user);
  } else {
    return registerUser(user);
  }
}

const loginUser = (user) => {
  return {
    type: "LOGIN_USER",
    payload: user
  }
}

const registerUser = (user) => {
  return {
    type: "REGISTER_USER",
    payload: user
  }
}

export const writeUser = (user) => {
  return {
    type: "WRITE_USER",
    payload: user
  }
}