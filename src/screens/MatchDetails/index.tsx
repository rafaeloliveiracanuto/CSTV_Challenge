import React, {FC} from 'react';
import {MatchDetailsProps} from './Models';
import MatchDetailsView from './view';

const MatchDetails: FC<MatchDetailsProps> = ({route, navigation}) => {
  const handleNavigate = () => {
    navigation.navigate('Home');
  };

  return <MatchDetailsView handleNavigate={handleNavigate} />;
};

export default MatchDetails;
