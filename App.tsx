import React from 'react';

import Home from './src/screens/Home/Home';
import AppNavigator from './src/routes/AppNavigator';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
export default App;
