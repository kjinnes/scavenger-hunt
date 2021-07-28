import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import screens from './screens'

export default function App() {
  const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Start'
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name='Home' component={screens.Home} />
            <Stack.Screen name='Play' component={screens.Play} />
            <Stack.Screen name='Create' component={screens.Create} />
            <Stack.Screen name='Start' component={screens.Start} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

