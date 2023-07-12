import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {HomeViewProps} from './Models';
import { styles } from './styles';

const HomeView: FC<HomeViewProps> = ({handleNavigate}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partidas</Text>
    </View>
  );
};

export default HomeView;
