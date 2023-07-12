import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import MatchCard from '../../components/MatchCard';
import {HomeViewProps, MatchCardItem} from './Models';
import {styles} from './styles';

const data: MatchCardItem[] = [
  {
    id: '1',
    leagueImage:
      'https://e7.pngegg.com/pngimages/475/754/png-clipart-logo-uefa-champions-league-brand-line-font-line-text-logo.png',
    leagueName: 'Champions League',
    serieName: 'Serie A',
  },
  {
    id: '2',
    leagueImage:
      'https://e7.pngegg.com/pngimages/475/754/png-clipart-logo-uefa-champions-league-brand-line-font-line-text-logo.png',
    leagueName: 'Champions League',
    serieName: 'Serie B',
  },
  {
    id: '3',
    leagueImage:
      'https://e7.pngegg.com/pngimages/475/754/png-clipart-logo-uefa-champions-league-brand-line-font-line-text-logo.png',
    leagueName: 'Champions League',
    serieName: 'Serie C',
  },
];

const HomeView: FC<HomeViewProps> = ({handleNavigate}) => {
  const renderMatchCards = ({item}: {item: MatchCardItem}) => {
    return (
      <View style={{marginBottom: 20}}>
         <MatchCard
          leagueImage={item.leagueImage}
          leagueName={item.leagueName}
          serieName={item.serieName}
          onPress={handleNavigate}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Partidas</Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderMatchCards}
        />
      </ScrollView>
    </View>
  );
};

export default HomeView;
