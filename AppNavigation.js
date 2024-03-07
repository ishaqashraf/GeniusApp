import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WorkshopsScreen from './src/components/screens/WorkshopsScreen/WorkshopsScreen';
import WorkshopDetailScreen from './src/components/screens/WorkshopDetail/WorkshopDetailScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="WorkshopsScreen">
      <Stack.Screen name="WorkshopsScreen" component={WorkshopsScreen} />
      <Stack.Screen name="WorkshopDetailScreen" component={WorkshopDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
