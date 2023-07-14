import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
  },
  playersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  errorText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
