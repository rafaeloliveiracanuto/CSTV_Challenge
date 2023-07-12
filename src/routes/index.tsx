import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import { View } from 'react-native';
import Home from '../screens/Home';
import MatchDetails from '../screens/MatchDetails';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    background: '#161621',
    text: '#FFFFFF',
  },
};

const Stack = createStackNavigator();

const RouteStacks = (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="MatchDetails" component={MatchDetails} />
  </Stack.Navigator>
);

const Routes = () => {
  return <NavigationContainer theme={theme}>{RouteStacks}</NavigationContainer>;
};

export default Routes;
