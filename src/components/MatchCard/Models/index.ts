export interface MatchCardProps {
  leagueImage: string | null;
  leagueName: string;
  serieName: string;
  firstTeamImage: string | null;
  firstTeamName: string;
  secondTeamImage: string | null;
  secondTeamName: string;
  date: string;
  onPress: () => void;
}
