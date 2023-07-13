import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {TeamItemProps} from './Models';
import {styles} from './styles';

const TeamItem: FC<TeamItemProps> = ({image, text}) => {
  return (
    <View style={styles.container}>
      {image ? <Image style={styles.image} source={{uri: image}} resizeMode='contain' />
      : <View style={styles.circle}/>}
      <Text numberOfLines={1} style={styles.text}>{text ?? 'Team'}</Text>
    </View>
  );
};

export default TeamItem;
