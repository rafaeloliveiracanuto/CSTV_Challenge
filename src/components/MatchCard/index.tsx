import React, {FC} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import Match from '../Match';
import {MatchCardProps} from './Models';
import {styles} from './styles';

const MatchCard: FC<MatchCardProps> = ({
  leagueImage,
  leagueName,
  serieName,
  firstTeamImage,
  firstTeamName,
  secondTeamImage,
  secondTeamName,
  date,
  onPress,
}) => {
  const dateStyles = [
    styles.dateContainer,
    date === 'AGORA' && styles.liveContainer,
  ];
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      testID={'match-card-container'}>
      <View style={styles.matchContainer}>
        <View style={styles.top}>
          <View style={styles.topContent}>
            <View style={dateStyles} testID={'date-container'}>
              <Text style={styles.dateText}>{date}</Text>
            </View>
          </View>
        </View>
        <View style={styles.center}>
          <Match
            firstTeamName={firstTeamName}
            firstTeamImage={firstTeamImage}
            secondTeamName={secondTeamName}
            secondTeamImage={secondTeamImage}
          />
        </View>
        <View style={styles.bottom}>
          <View style={styles.line} />
          <View style={styles.bottomContent}>
            {leagueImage ? (
              <Image
                style={styles.bottomImage}
                source={{uri: leagueImage}}
                testID={'league-image'}
              />
            ) : (
              <View style={styles.circle} testID={'circle-placeholder'} />
            )}
            <Text
              style={styles.bottomText}
              numberOfLines={1}
              ellipsizeMode="tail"
              testID={'league-and-serie-text'}>
              {`${leagueName} ${serieName}`}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MatchCard;
