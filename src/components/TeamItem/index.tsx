import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {TeamItemProps} from './Models';
import {styles} from './styles';

const TeamItem: FC<TeamItemProps> = ({image, text}) => {
  return (
    <View>
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default TeamItem;
