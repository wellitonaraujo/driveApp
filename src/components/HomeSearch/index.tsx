import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const HomeSearch = () => {

    return (
        <View>
            <View style={styles.inputBox}>
                <Text style={styles.inputText} children='Where To?'/>
                
                <Pressable style={styles.timeContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#535353'}/>
                    <Text children='Now'/>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16}/>
                </Pressable>

            </View>

            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={20} color={'#efefef'}/>
                </View>
                <Text style={styles.destinationText} children='Spin Nightclub'/>
            </View>

            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
                    <Entypo name={'home'} size={20} color={'#efefef'}/>
                </View>
                <Text style={styles.destinationText} children='Home'/>
            </View>

        </View>
    );
};

export default HomeSearch;