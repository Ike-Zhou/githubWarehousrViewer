const inintState = {
  login: '',
  avatar_url: '',
}

// eslint-disable-next-line default-param-last
export default (state = inintState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        login: action.payload.login,
        avatar_url: action.payload.avatar_url,
      }
    default:
      return state
  }
}
