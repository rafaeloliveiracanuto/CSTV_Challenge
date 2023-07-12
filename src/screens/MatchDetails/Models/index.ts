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

export type PlayerCardRow = {
  playerImage: string;
  playerName: string;
  playerNickname: string;
  isLeft: boolean;
  playerImage2: string;
  playerName2: string;
  playerNickname2: string;
  isLeft2: boolean;
  id: string;
};

export interface MatchDetailsViewProps {
  handleNavigate: () => void;
}

export interface MatchDetailsParams {}
