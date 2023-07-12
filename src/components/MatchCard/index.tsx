import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
              <Text style={styles.dateText}>Agora</Text>
            </View>
          </View>
        </View>
        <View style={styles.center}>
          <Match
            firstTeamName={'Time 1'}
            firstTeamImage={'https://www.escudosfc.com.br/images/celtic.png'}
            secondTeamName={'Time 2'}
            secondTeamImage={'https://www.escudosfc.com.br/images/psg.png'}
          />
        </View>
        <View style={styles.bottom}>
          <View style={styles.line} />
          <View style={styles.bottomContent}>
            <Image style={styles.bottomImage} source={{uri: leagueImage}} />
            <Text
              style={styles.bottomText}>{`${leagueName} ${serieName}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MatchCard;
