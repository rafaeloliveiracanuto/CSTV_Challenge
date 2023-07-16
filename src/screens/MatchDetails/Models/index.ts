import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../routes/Models';
import { Team } from '../../../services/Teams/Models';

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
  playerImage?: string;
  playerName?: string;
  playerNickname: string;
  playerAge: number;
  playerNationality: string;
  isLeft: boolean;
  playerImage2?: string;
  playerName2?: string;
  playerNickname2: string;
  playerAge2: number;
  playerNationality2: string;
  isLeft2: boolean;
  playerID: number;
  player2ID: number;
};

type Error = {
  message?: string;
};

export interface MatchDetailsViewProps {
  teams: Team[];
  players?: PlayerCardRow[];
  dateText: string;
  isLoading: boolean;
  isError: boolean;
  errors: Error[];
}

export interface MatchDetailsParams {
  title: string;
  dateText: string;
  firstTeamID: number;
  secondTeamID: number;
  itemId: string;
}
