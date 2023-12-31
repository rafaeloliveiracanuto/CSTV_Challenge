import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272639',
    borderRadius: 16,
    width: '100%',
    height: height * 0.25,
    justifyContent: 'center',
  },
  matchContainer: {
    flex: 1,
  },
  line: {
    borderColor: 'white',
    borderWidth: 0.5,
  },
  top: {
    flex: 1,
  },
  topContent: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  dateText: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  dateContainer: {
    paddingHorizontal: 10,
    height: 30,
    backgroundColor: 'grey',
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  liveContainer: {
    backgroundColor: '#F42A35',
  },
  center: {
    flex: 4,
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
  },
  bottomContent: {
    flexDirection: 'row',
    marginLeft: 20,
    flex: 1,
    alignItems: 'center',
  },
  bottomImage: {
    width: 16,
    height: 16,
    resizeMode: 'cover',
    marginRight: 10,
  },
  bottomText: {
    fontSize: 10,
    color: 'white',
    flexShrink: 2,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 100,
    backgroundColor: '#C4C4C4',
    marginRight: 10,
  },
});
