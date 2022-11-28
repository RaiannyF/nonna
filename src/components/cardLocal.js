import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { useNavigation } from '@react-navigation/native';

export function CardLocal({ name, street, adress, photo, ...rest }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('PaginaEstabelecimento')}
        >
            <Image
                source={{ uri: photo }}
                style={styles.image} />

            <View style={{ marginLeft: 15 }}>
                <Text style={styles.name}>
                    {name}
                </Text>

                <Text style={styles.adress}>
                    {street}
                    {'\n'}
                    {adress}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15
    },
    name: {
        fontFamily: fonts.textB,
        fontSize: 20,
        color: colors.grayText,
        marginBottom: 5
    },
    adress: {
        fontFamily: fonts.text,
        fontSize: 15,
        color: colors.grayInput
    }
});
