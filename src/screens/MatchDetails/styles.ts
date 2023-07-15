import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  matchContainer: {
    marginTop: 20,
  },
  playersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'white',
    marginTop: 20,
    marginBottom: 15,
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
  cardWidth: {
    width: '48%',
  },
});
