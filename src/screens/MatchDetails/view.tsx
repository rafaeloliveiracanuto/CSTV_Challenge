import React, {FC} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Match from '../../components/Match';
import PlayerCard from '../../components/PlayerCard';
import {MatchDetailsViewProps, PlayerCardRow} from './Models';
import {styles} from './styles';

const MatchDetailsView: FC<MatchDetailsViewProps> = ({
  teams,
  players,
  dateText,
  isLoading,
  isError,
  errors,
  handleNavigate
}) => {
  const firstTeam = teams[0];
  const secondTeam = teams[1];

  console.log({players})

  const renderPlayerCards = ({item}: {item: PlayerCardRow}) => {
    const playerRequirements =
      item.playerNickname && item.playerName !== 'Nome Jogador';
    const player2Requirements =
      item.playerNickname2 && item.playerName2 !== 'Nome Jogador';

    return (
      <View style={styles.playersContainer}>
        { playerRequirements ?
          <PlayerCard
            playerImage={item.playerImage}
            playerName={item.playerName}
            playerNickname={item.playerNickname}
            isLeft={item.isLeft}
          /> : <View style={{width: '48%'}}></View>
        }
        { player2Requirements &&
          <PlayerCard
            playerImage={item.playerImage2}
            playerName={item.playerName2}
            playerNickname={item.playerNickname2}
            isLeft={item.isLeft2}
          />
        }
      </View>
    );
  };

  if (isError) {
    const error = errors.find(err => err?.message);
    return (
      <View style={styles.loading}>
        <Text style={styles.errorText}>Error: {error?.message}</Text>
      </View>
    );
  }

  if (isLoading && !players?.length) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{marginTop: 20}}>
        <Match
          firstTeamName={firstTeam?.name}
          firstTeamImage={firstTeam?.image_url}
          secondTeamName={secondTeam?.name}
          secondTeamImage={secondTeam?.image_url}
        />
      </View>
      <Text style={styles.dateText}>{dateText}</Text>
      <FlatList
        data={players}
        keyExtractor={item => item.id}
        renderItem={renderPlayerCards}
      />
    </View>
  );
};

export default MatchDetailsView;
