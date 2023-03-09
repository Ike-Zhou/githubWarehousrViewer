const initState = {
  reposName: '',
}

// eslint-disable-next-line default-param-last
export default (state = initState, action) => {
  switch (action.type) {
    case 'TODETAILE':
      return {
        ...state,
        repos: action.reposName,
      }
    default:
      return state
  }
}
