import React, {FC, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {PlayerCardProps} from './Models';
import {styles} from './styles';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import CountryPicker from 'react-native-country-picker-modal';

const PlayerCard: FC<PlayerCardProps> = ({
  playerImage,
  playerName,
  playerNickname,
  playerAge,
  playerNationality,
  isLeft,
}) => {
  const [isVisible, setIsVisible] = useState(false);
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
    <TouchableOpacity
      onPress={() => setIsVisible(true)}
      style={viewStyles}
      testID={'player-card-container'}>
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
      <Modal
        testID={'modal'}
        isVisible={isVisible}
        backdropColor="#B4B3DB"
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}>
        <View style={styles.modal}>
          <View style={styles.closeContainer}>
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              testID={'modal-close-icon'}>
              <Icon name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <Image
            source={{uri: playerImage}}
            style={styles.modalImage}
            testID={'player-image'}
            resizeMode='cover'
          />
          <View style={styles.playerInfo}>
            <Text style={styles.nickname} testID={'player-card-nickname'}>
              {playerNickname}
            </Text>
            <Text style={styles.name} testID={'player-card-name'}>
              {playerName}
            </Text>
            {playerAge &&
              <Text style={styles.name} testID={'player-card-age'}>
                {playerAge} anos
              </Text>
            }
          </View>
          {playerNationality &&
            <CountryPicker
              withFlag={false}
              withCountryNameButton={false}
              withFilter={true}
              onSelect={() => null}
              countryCode={playerNationality}
            />
          }
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default PlayerCard;
