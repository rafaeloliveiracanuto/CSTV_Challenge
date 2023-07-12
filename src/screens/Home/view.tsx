import React, {FC} from 'react';
import {Button, View} from 'react-native';
import {HomeViewProps} from './Models';

const HomeView: FC<HomeViewProps> = ({handleNavigate}) => {
  return (
    <View>
      <Button title="Go to Details" onPress={handleNavigate} />
    </View>
  );
};

export default HomeView;
