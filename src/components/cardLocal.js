import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function CardLocal({ name, street, address, photo, ...rest }) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: photo }}
                style={styles.image} />

            <View style={{ marginLeft: 15 }}>
                <Text style={styles.name}>
                    {name}
                </Text>

                <Text style={styles.address}>
                    {street}
                    {'\n'}
                    {address}
                </Text>
            </View>
        </View>
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
    address: {
        fontFamily: fonts.text,
        fontSize: 15,
        color: colors.grayInput
    }
});
