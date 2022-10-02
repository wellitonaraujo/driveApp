import React from 'react';
import {SafeAreaView, StyleSheet,Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch';
import TravelMessage from '../../components/TravelMessage';

import styles from './styles';


const Home = () => {

    return (
        <View>
            <HomeMap/>
            <TravelMessage/>
            <HomeSearch />
        </View>
    );
};

export default Home;
