import React, {FC, useEffect, useState} from 'react';
import {HomeProps} from './Models';
import HomeView from './view';
import Matches from '../../services/matches';
import {useQuery} from 'react-query';

const Home: FC<HomeProps> = ({route, navigation}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const {data, isLoading, isError, error, refetch, isRefetching} = useQuery(
    ['matches', currentPage],
    async () => await Matches.fetch(currentPage),
  );

  const [matches, setMatches] = useState(data);

  useEffect(() => {
    if (!matches && data?.length) {
      setMatches(data);
      setPages();
    } else if (!isLoading && !isError) {
      setMatches(prevData => [...prevData, ...data]);
    }
  }, [currentPage, isLoading]);

  useEffect(() => {
    if (!isRefetching) {
      if (data?.length && !isError) setMatches(data);
    }
  }, [isRefetching]);

  useEffect(() => {
    if (totalPages) setHasNextPage(currentPage < totalPages);
  }, [totalPages]);

  const setPages = async () => {
    const pages = await Matches.getTotalPages();
    setTotalPages(pages);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const refresh = async () => {
    console.log('Refreshing...');
    setCurrentPage(1);
    await refetch();
  };

  console.log({isRefetching})
  console.log({currentPage})

  const handleNavigate = params => {
    navigation.navigate('MatchDetails', {...params});
  };

  return (
    <HomeView
      matches={matches}
      isLoading={isLoading}
      isRefetching={isRefetching}
      isError={isError}
      error={error}
      refresh={refresh}
      hasNextPage={hasNextPage}
      handleNextPage={handleNextPage}
      handleNavigate={handleNavigate}
    />
  );
};

export default Home;
