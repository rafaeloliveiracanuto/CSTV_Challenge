import React, {FC} from 'react';
import {Text, View} from 'react-native';
import TeamItem from '../TeamItem';
import {MatchProps} from './Models';
import {styles} from './styles';

const Match: FC<MatchProps> = ({
  firstTeamImage,
  firstTeamName,
  secondTeamImage,
  secondTeamName,
}) => {
  return (
    <View style={styles.container}>
      <TeamItem text={firstTeamName} image={firstTeamImage} />
      <Text style={styles.text}>vs</Text>
      <TeamItem text={secondTeamName} image={secondTeamImage} />
    </View>
  );
};

export default Match;
