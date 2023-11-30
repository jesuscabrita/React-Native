import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Layout } from './Components/Layout/Layout';

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={DefaultTheme}>
        <Layout/>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;