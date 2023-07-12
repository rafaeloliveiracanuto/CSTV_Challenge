import React, {FC} from 'react';
import {HomeProps} from './Models';
import HomeView from './view';

const Home: FC<HomeProps> = ({route, navigation}) => {
  const handleNavigate = () => {
    navigation.navigate('MatchDetails');
  };

  return <HomeView handleNavigate={handleNavigate} />;
};

export default Home;
