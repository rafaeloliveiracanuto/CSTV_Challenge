import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: width * 0.05,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#161621',
    padding: 10,
    borderRadius: 16,
    backgroundColor: '#272639',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 0,
    marginVertical: 30,
    left: 0,
    right: 0,
  },
  cardContainer: {
    marginBottom: 20,
  },
});
