import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../routes/Models';

type MatchDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MatchDetails'
>;
type MatchDetailsRouteProp = RouteProp<RootStackParamList, 'MatchDetails'>;

export interface MatchDetailsProps {
  navigation: MatchDetailsNavigationProp;
  route: MatchDetailsRouteProp;
}

export interface MatchDetailsViewProps {
  handleNavigate: () => void;
}

export interface MatchDetailsParams {}
