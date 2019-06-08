import {
  CHANGE_KEY
} from './constant'

const defaultState = {
  itemlists: [
    [
      {
        title: 'I AM star',
        content: 'Hello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an item'
      },
      {
        title: 'I AM star2',
        content: 'Hello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an item'
      },
      {
        title: 'I AM star3',
        content: 'Hello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an item'
      }
    ],
    [
      {
        title: 'I AM night',
        content: 'Hello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an item'
      },
      {
        title: 'I AM night2',
        content: 'Hello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an item'
      },
      {
        title: 'I AM night3',
        content: 'Hello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an item'
      },
      {
        title: 'I AM night4',
        content: 'Hello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an item'
      }
    ]
  ],
  currentKey: 0,
  isMenuShow: false
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case CHANGE_KEY:
      newState.currentKey = action.value
      return newState
    default:
      return newState
  }
  
  
}
