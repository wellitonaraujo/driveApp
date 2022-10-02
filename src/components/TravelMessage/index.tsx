import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const TravelMessage = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>Upgrading this package often requires the files linked to your projects</Text>
            <Text style={styles.learnMore}>Learn more</Text>
        </View>
    );
};

export default TravelMessage;
