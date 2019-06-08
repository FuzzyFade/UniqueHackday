import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyle from './style/globalstyle'
import Routers from './Routers'
function App() {
  return (
    <div>
      <GlobalStyle />
      <Provider store={store}>
        <Routers />
      </Provider>
    </div>
  );
}

export default App;
