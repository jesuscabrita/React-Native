import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Layout } from './Components/Layout/Layout';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Login } from './Components/Login/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from './Components/Profile/Profile';

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PaperProvider theme={DefaultTheme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" headerMode="none">
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="App" component={Layout} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;