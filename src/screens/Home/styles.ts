import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: width * 0.05,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    alignSelf: 'flex-start',
  },
});
