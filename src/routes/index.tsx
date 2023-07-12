import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import MatchDetails from '../screens/MatchDetails';
import {MatchDetailsProps} from '../screens/MatchDetails/Models';
import {GoBackIconProps} from './Models';
import {headerTheme, iconStyle, theme} from './styles';

const Stack = createStackNavigator();

const GoBackIcon: React.FC<GoBackIconProps> = ({onPress}) => (
  <TouchableOpacity style={iconStyle} onPress={onPress}>
    <Icon name="arrow-back" size={24} color="white" />
  </TouchableOpacity>
);

const RouteStacks = (
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={Home} options={{...headerTheme}} />
    <Stack.Screen
      name='MatchDetails'
      component={MatchDetails}
      options={({navigation}: MatchDetailsProps) => ({
        headerLeft: () => <GoBackIcon onPress={() => navigation.goBack()} />,
        title: 'League + serie',
        ...headerTheme,
      })}
    />
  </Stack.Navigator>
);

const Routes = () => {
  return <NavigationContainer theme={theme}>{RouteStacks}</NavigationContainer>;
};

export default Routes;
