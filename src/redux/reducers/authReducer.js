
const initialState = {
  users: [
    {
      id: 1,
      email: 'kristijan.j92@gmail.com',
      password: '123'
    },
    {
      id: 2,
      email: 'kiko@gmail.com',
      password: '123'
    },
    {
      id: 3,
      email: 'test@gmail.com',
      password: '123'
    },
  ],
  user: undefined
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: state.users.filter(user => user.email === action.payload.email)[0]
      }

    case 'REGISTER_USER':
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: state.users.length + 1,
            ...action.payload
          }
        ],
        user: {
          id: state.users.length + 1,
          ...action.payload
        }
      }
  
    default:
      return state;
  }
}

export default userReducer;