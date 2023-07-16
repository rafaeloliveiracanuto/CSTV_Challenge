import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../routes/Models';
import {MatchDetailsParams} from '../../MatchDetails/Models';
import {Match} from '../../../services/Matches/Models';

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

type Error = {
  message: string;
};
export interface HomeViewProps {
  handleNavigate: (params: MatchDetailsParams) => void;
  matches: Match[];
  isLoading: boolean;
  isError: boolean;
  error: Error | undefined | null;
  isFetching: boolean;
  refresh: () => void;
  isRefreshing: boolean;
  hasNextPage: boolean;
  handleNextPage: () => void;
}

export interface HomeParams {}
