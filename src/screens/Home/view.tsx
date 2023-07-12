import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import MatchCard from '../../components/MatchCard';
import {HomeViewProps} from './Models';
import {styles} from './styles';

const HomeView: FC<HomeViewProps> = ({handleNavigate}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partidas</Text>
      <MatchCard
        leagueImage={
          'https://e7.pngegg.com/pngimages/475/754/png-clipart-logo-uefa-champions-league-brand-line-font-line-text-logo.png'
        }
        leagueName={'Champions League'}
        serieName={'Serie A'}
      />
    </View>
  );
};

export default HomeView;
