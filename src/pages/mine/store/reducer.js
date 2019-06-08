const defaultState = {
  text: 'Hello login',
  username: '吴东泽',
  avatar: 2,
}

export default (state = defaultState, action) => {
  return {
    ...state
  }
}
