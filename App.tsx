/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { Provider } from 'react-redux';
import NavigationRouter from './src/navigation/NavigationRouter';
import { store } from './src/redux/store';


function App(): React.JSX.Element {
  return <Provider store={store}>
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationRouter />
    </SafeAreaView>
  </Provider>
}

export default App;
