import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Match from '../Match';
import TeamItem from '../TeamItem';
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
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.matchContainer}>
        <View style={styles.top}>
          <View style={styles.topContent}>
            <View style={[styles.dateContainer, styles.liveContainer]}>
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
              <Image style={styles.bottomImage} source={{uri: leagueImage}} />
            ) : (
              <View style={styles.circle} />
            )}
            <Text
              style={styles.bottomText}
              numberOfLines={1}
              ellipsizeMode="tail">
              {`${leagueName} ${serieName}`}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MatchCard;
