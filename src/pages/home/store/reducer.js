import {
  CHANGE_KEY,
  SET_IDEA_LIST,
  SET_SQUARE_LIST
} from './constant'

const defaultState = {
  itemlists: [
    [
      {
        title: '点子缓存功能',
        content: '一不小心拖了一张图片进去，然而并没有拖拽功能，之前写的东西全没了。'
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
    case SET_IDEA_LIST:
      newState.itemlists[0] = action.value
      return newState
    case SET_SQUARE_LIST:
      newState.itemlists[1] = action.value
      return newState
    default:
      return newState
  }
  
  
}
