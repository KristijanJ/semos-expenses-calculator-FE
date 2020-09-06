const initialState = {
  user: null,
  userToken: null,
  isLoaded: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        userToken: action.payload
      }

    case 'REGISTER_USER':
      return {
        ...state,
        userToken: action.payload
      }

    case 'WRITE_USER':
      return {
        ...state,
        user: action.payload.user,
        userToken: action.payload.userToken,
        isLoaded: true
      }
  
    default:
      return state;
  }
}

export default userReducer;