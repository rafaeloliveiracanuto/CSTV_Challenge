import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../routes/Models';

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;

export interface HomeProps {
  navigation: HomeNavigationProp;
  route: HomeRouteProp;
}
export type MatchCardItem = {
  id: string;
  leagueImage: string;
  leagueName: string;
  serieName: string;
};

export interface HomeViewProps {
  handleNavigate: () => void;
  matches: Object[];
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
  isFetching: boolean;
  loadMoreMatches: () => void;
  refetch: () => void;
}

export interface HomeParams {}
