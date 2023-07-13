import React, {FC} from 'react';
import {ActivityIndicator, Button, Text, TouchableOpacity, View} from 'react-native';
import {FlatList, RefreshControl} from 'react-native-gesture-handler';
import MatchCard from '../../components/MatchCard';
import {HomeViewProps, MatchCardItem} from './Models';
import {styles} from './styles';
import Matches from '../../services/matches';


const HomeView: FC<HomeViewProps> = ({
  handleNavigate,
  matches,
  isLoading,
  isFetching,
  isError,
  error,
  refetch,
  isRefetching,
  hasNextPage,
  loadMoreMatches,
  handleNextPage,
}) => {
  const renderMatchCards = ({item}: {item}) => {
    const league = item.league;
    const serie = item.serie;
    const teams = item.opponents;

    return (
      <View style={{marginBottom: 20}}>
        <MatchCard
          leagueImage={league?.image_url}
          leagueName={league?.name}
          serieName={serie?.full_name}
          firstTeamImage={teams[0]?.opponent.image_url}
          firstTeamName={teams[0]?.opponent.name}
          secondTeamImage={teams[1]?.opponent.image_url}
          secondTeamName={teams[1]?.opponent.name}
          date={item?.begin_at}
          onPress={handleNavigate}
        />
      </View>
    );
  };

  if (isError) {
    return (
      <View style={styles.container}>
        <Text>Error: {error?.message}</Text>
      </View>
    );
  }

  if (isLoading && matches?.length < 10) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  const handleEndReached = () => {
    if (hasNextPage) handleNextPage();
  };

  const showBottomIndicator = isLoading && matches?.length >= 10 && hasNextPage;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partidas</Text>
      <FlatList
        data={matches}
        //keyExtractor={item => item?.id}
        renderItem={renderMatchCards}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refetch}
            colors={['grey']}
            tintColor={'grey'}
          />
        }
        onEndReached={handleEndReached}
      />
      {showBottomIndicator && (
        <View style={[styles.loading, styles.indicatorContainer]}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </View>
  );
};

export default HomeView;
