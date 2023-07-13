import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import Routes from './src/routes';
import {QueryClient, QueryClientProvider} from 'react-query';

const client = new QueryClient();

const App = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 3000);
  }, []);

  return (
    <QueryClientProvider client={client}>
      <Routes />
    </QueryClientProvider>
  );
};

export default App;
