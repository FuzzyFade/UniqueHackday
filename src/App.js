import React from 'react';
import Login from './pages/login'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Login />
      </Provider>
    </div>
  );
}

export default App;
