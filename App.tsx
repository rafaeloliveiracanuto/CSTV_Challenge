import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import Routes from './src/routes';

const App = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 3000);
  }, []);

  return (
    <>
      <Routes />
    </>
  );
};

export default App;
