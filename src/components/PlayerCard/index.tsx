import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {PlayerCardProps} from './Models';
import {styles} from './styles';

const PlayerCard: FC<PlayerCardProps> = ({
  playerImage,
  playerName,
  playerNickname,
  isLeft,
}) => {
  const viewStyles = {
    ...styles.container,
    ...(isLeft ? styles.left : styles.right),
  };
  const imageContainerStyles = {
    ...styles.imageContainer,
    ...(isLeft ? styles.imageLeft : styles.imageRight),
  };
  const textStyle = isLeft ? styles.textLeft : styles.textRight;
  return (
    <View style={viewStyles} testID={'player-card-container'}>
      <Text
        style={{...styles.nickname, ...textStyle}}
        testID={'player-card-nickname'}>
        {playerNickname}
      </Text>
      <Text style={{...styles.name, ...textStyle}} testID={'player-card-name'}>
        {playerName}
      </Text>
      <View style={imageContainerStyles} testID={'player-card-image-container'}>
        <Image
          source={{uri: playerImage}}
          style={styles.image}
          testID={'player-image'}
          resizeMode='cover'
        />
      </View>
    </View>
  );
};

export default PlayerCard;
