import React, {FC} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {FlatList, RefreshControl} from 'react-native-gesture-handler';
import MatchCard from '../../components/MatchCard';
import {HomeViewProps} from './Models';
import {styles} from './styles';
import {formatDate} from '../../utils/functions';
import {Match} from '../../services/Matches/Models';
import {MatchDetailsParams} from '../MatchDetails/Models';

const HomeView: FC<HomeViewProps> = ({
  handleNavigate,
  matches,
  isLoading,
  isError,
  error,
  refresh,
  isRefreshing,
  hasNextPage,
  handleNextPage,
}) => {
  const renderMatchCards = ({item}: {item: Match}): JSX.Element | null => {
    const league = item.league;
    const serie = item.serie;
    const teams = item.opponents;

    if (!teams[0]?.opponent?.id || !teams[1]?.opponent?.id) return null;
    const dateText =
      item?.status === 'running'
        ? 'AGORA'
        : formatDate(item?.begin_at ?? item?.scheduled_at);

    const goToMatchDetails = () => {
      const params: MatchDetailsParams = {
        title: league?.name + serie?.full_name,
        dateText,
        firstTeamID: teams[0]?.opponent?.id,
        secondTeamID: teams[1]?.opponent?.id,
      };
      handleNavigate(params);
    };

    return (
      <View style={styles.cardContainer}>
        <MatchCard
          leagueImage={league?.image_url}
          leagueName={league?.name}
          serieName={serie?.full_name}
          firstTeamImage={teams[0]?.opponent.image_url}
          firstTeamName={teams[0]?.opponent.name}
          secondTeamImage={teams[1]?.opponent.image_url}
          secondTeamName={teams[1]?.opponent.name}
          date={dateText}
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
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderMatchCards}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={refresh}
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
