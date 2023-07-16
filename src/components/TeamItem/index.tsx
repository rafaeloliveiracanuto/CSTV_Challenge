import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {TeamItemProps} from './Models';
import {styles} from './styles';

const TeamItem: FC<TeamItemProps> = ({image, text}) => {
  return (
    <View style={styles.container}>
      {image ? (
        <Image
          style={styles.image}
          source={{uri: image}}
          resizeMode='contain'
          testID='team-image'
        />
      ) : (
        <View style={styles.circle} testID={'team-circle'} />
      )}
      <Text numberOfLines={1} style={styles.text}>
        {text ?? 'Time'}
      </Text>
    </View>
  );
};

export default TeamItem;
