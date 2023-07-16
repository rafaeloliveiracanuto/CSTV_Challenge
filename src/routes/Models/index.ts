export type RootStackParamList = {
  Home: undefined;
  MatchDetails: {
    title: string;
    dateText: string;
    firstTeamID: number;
    secondTeamID: number;
  };
};

export type GoBackIconProps = {
  onPress: () => void;
};
