import React from 'react';
import {SafeAreaView} from 'react-native';
import HomeMap from './src/components/HomeMap';
import TravelMessage from './src/components/TravelMessage';


const App = () => {
  return (
    <SafeAreaView>
      <HomeMap/>
      <TravelMessage />
    </SafeAreaView>
  );
};

export default App;
