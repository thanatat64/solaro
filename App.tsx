import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from './screens/HomePage';
import DashboardPage from './screens/DashboardPage';
import AddDevicePage from './screens/AddDevicePage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="DashboardPage" 
          component={DashboardPage} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="AddDevicePage" 
          component={AddDevicePage} 
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;