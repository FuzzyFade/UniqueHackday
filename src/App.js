import React from 'react';
import Login from './pages/login'
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyle from './style/globalstyle'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Provider store={store}>
        <Login />
      </Provider>
    </div>
  );
}

export default App;
