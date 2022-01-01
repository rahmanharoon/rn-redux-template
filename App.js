import React from 'react';
import Main from './src/pages/Main';
import {Provider} from 'react-redux';
import configureStore from './src/redux/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
