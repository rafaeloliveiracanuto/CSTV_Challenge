import React, {FC, useEffect, useState} from 'react';
import {MatchDetailsProps, PlayerCardRow} from './Models';
import MatchDetailsView from './view';
import {useQuery, useQueryClient} from 'react-query';
import Teams from '../../services/Teams/teams';
import {Team} from '../../services/Teams/Models';

const MatchDetails: FC<MatchDetailsProps> = ({route, navigation}) => {
  const {title, dateText, firstTeamID, secondTeamID} = route.params;
  const [players, setPlayers] = useState<PlayerCardRow[]>();
  const queryClient = useQueryClient();

  const {data, isLoading, isError, error} = useQuery<Team>(
    'teams',
    async (): Promise<Team> => await Teams.fetchByID(firstTeamID),
  );

  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
  } = useQuery('teams2', async () => await Teams.fetchByID(secondTeamID));

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      queryClient.removeQueries('teams');
      queryClient.removeQueries('teams2');
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    navigation.setOptions({title});
  }, []);

  useEffect(() => {
    const greaterList =
      data?.players?.length > data2?.players?.length
        ? data?.players
        : data2?.players;

    const playersList: PlayerCardRow[] = greaterList?.map((player, index) => ({
      id: `${index + 1}`,
      playerImage: data?.players[index]?.image_url,
      playerName: `${data?.players[index]?.first_name ?? 'Nome'} ${
        data?.players[index]?.last_name ?? 'Jogador'
      }`,
      playerNickname: data?.players[index]?.name,
      playerID: data?.players[index]?.id,
      isLeft: true,
      playerImage2: data2?.players[index]?.image_url,
      playerName2: `${data2?.players[index]?.first_name ?? 'Nome'} ${
        data2?.players[index]?.last_name ?? 'Jogador'
      }`,
      playerNickname2: data2?.players[index]?.name,
      player2ID: data2?.players[index]?.id,
      isLeft2: false,
    }));

    setPlayers(playersList);
  }, [isLoading, isLoading2]);

  return (
    <MatchDetailsView
      teams={[data, data2]}
      players={players}
      dateText={dateText}
      isLoading={isLoading && isLoading2}
      isError={isError && isError2}
      errors={[error, error2]}
    />
  );
};

export default MatchDetails;
