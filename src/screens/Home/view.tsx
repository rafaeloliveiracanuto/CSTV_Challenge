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

    if (!teams[0]?.opponent?.id || !teams[1]?.opponent?.id) return null;

    const goToMatchDetails = () => {
      const params = {
        title: league?.name + serie?.full_name,
        dateText: item?.begin_at,
        firstTeamID: teams[0]?.opponent?.id,
        secondTeamID: teams[1]?.opponent?.id,
      };
      handleNavigate(params);
    };

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
          onPress={goToMatchDetails}
        />
      </View>
    );
  };

  if (isError) {
    return (
      <View style={styles.loading}>
        <Text style={styles.errorText}>Error: {error?.message}</Text>
      </View>
    );
  }

  if (isLoading && !matches) {
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
        keyExtractor={item => item?.id}
        renderItem={renderMatchCards}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
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
