import React, {FC, useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
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
}) => {
  const firstTeam = teams[0];
  const secondTeam = teams[1];

  const renderPlayerCards = ({item}: {item: PlayerCardRow}) => {
    const playerRequirements =
      (item.playerNickname || item.playerName !== 'Nome Jogador') &&
      item.playerID;
    const player2Requirements =
      (item.playerNickname2 || item.playerName2 !== 'Nome Jogador') &&
      item.player2ID;

    return (
      <View style={styles.playersContainer}>
        { playerRequirements ?
          <PlayerCard
            playerImage={item.playerImage}
            playerName={item.playerName}
            playerNickname={item.playerNickname}
            playerAge={item.playerAge}
            playerNationality={item.playerNationality}
            isLeft={item.isLeft}
          /> : <View style={styles.cardWidth}></View>
        }
        { player2Requirements &&
          <PlayerCard
            playerImage={item.playerImage2}
            playerName={item.playerName2}
            playerNickname={item.playerNickname2}
            playerAge={item.playerAge2}
            playerNationality={item.playerNationality2}
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
      <View style={styles.matchContainer}>
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
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderPlayerCards}
      />
    </View>
  );
};

export default MatchDetailsView;
