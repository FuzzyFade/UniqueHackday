const defaultState = {
  text: 'Hello login',
  username: '吴东泽'
}

export default (state = defaultState, action) => {
  return {
    ...state
  }
}
