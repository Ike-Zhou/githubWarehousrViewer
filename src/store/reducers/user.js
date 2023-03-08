const inintState = {
  login: '',
}

// eslint-disable-next-line default-param-last
export default (state = inintState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
