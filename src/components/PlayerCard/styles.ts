import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272639',
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  left: {
    borderTopEndRadius: 12,
    borderBottomEndRadius: 12,
  },
  right: {
    borderTopStartRadius: 12,
    borderBottomStartRadius: 12,
  },
  nickname: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 12,
  },
  name: {
    color: '#6C6B7E',
    fontSize: 10,
  },
  textLeft: {
    paddingRight: 30,
  },
  textRight: {
    paddingLeft: 30,
  },
  imageContainer: {
    position: 'absolute',
  },
  imageLeft: {
    top: 0,
    right: 0,
    paddingRight: 10,
    paddingLeft: 20,
  },
  imageRight: {
    top: 0,
    left: 0,
    paddingRight: 20,
    paddingLeft: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
});
