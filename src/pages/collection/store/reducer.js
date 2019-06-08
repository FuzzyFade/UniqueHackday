const defaultState = {
  itemList: [
    {
      title: 'I AM colletion1',
      content: 'Hello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an item'
    },
    {
      title: 'I AM colletion2',
      content: 'Hello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an item'
    },
    {
      title: 'I AM colletion3',
      content: 'Hello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an itemHello, This is content of an item'
    }
  ]
}

export default (state = defaultState, action) => {
  return {
    ...state
  }
}
