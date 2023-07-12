import React, {FC} from 'react';
import {Button, View} from 'react-native';
import {MatchDetailsViewProps} from './Models';

const MatchDetailsView: FC<MatchDetailsViewProps> = ({handleNavigate}) => {
  return (
    <View>
      <Button title="Go to Home" onPress={handleNavigate} />
    </View>
  );
};

export default MatchDetailsView;
