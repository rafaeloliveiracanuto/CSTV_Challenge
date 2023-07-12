import {DefaultTheme} from '@react-navigation/native';
import {Dimensions} from 'react-native';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFFFFF',
    background: '#161621',
    text: '#FFFFFF',
  },
};

export const headerTheme = {
  headerStyle: {
    backgroundColor: '#161621',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTintColor: '#FFFFFF',
};

const width = Dimensions.get('window').width;

export const iconStyle = {
  marginLeft: width * 0.05,
};
