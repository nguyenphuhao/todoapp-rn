/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import DashBoard from './src/screens/DashBoard';
import { Theme } from './src/styled/defaultTheme';
import { ThemeProvider } from './src/styled/styled';
import store from './store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <DashBoard />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
