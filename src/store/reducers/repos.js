const initState = {
}

// eslint-disable-next-line default-param-last
export default (state = initState, action) => {
  switch (action.type) {
    case 'GETREPOS_SUCCESS':
      return {
        ...state,
        repos: action.payload,
      }
    default:
      return state
  }
}
