import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import {useNavigation} from '@react-navigation/native';

export function CardFamily({ name, adress, photo, ...rest }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <Image
            source={{uri: photo}}
            style={styles.image}
            />
            <View style={styles.info}> 
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.adress}>
                {adress}
            </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray,
        flexDirection: 'row',
        borderRadius: 7,
        width: '83%',
        height: 86,
        margin: 10
    },
    image: {
        alignSelf: 'center',
        width: 72,
        height: 69,
        borderRadius: 7,
        marginHorizontal: 10
    },
    name: {
        fontFamily: fonts.textB,
        fontSize: 13,
        color: colors.grayText,
    },
    adress: {
        fontFamily: fonts.text,
        fontSize: 9,
        color: colors.grayText,
    },
    info: {
        alignSelf: 'center',
        marginHorizontal: 5
    }
});
