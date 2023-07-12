import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../routes/Models';

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;

export interface HomeProps {
  navigation: HomeNavigationProp;
  route: HomeRouteProp;
}

export interface HomeViewProps {
  handleNavigate: () => void;
}

export interface HomeAdressParams {}
