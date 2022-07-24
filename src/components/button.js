import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    ViewProps,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function Button({ text, ...rest }) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <Text style={styles.title}>
                {text}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.pink,
        width: '85%',
        height: 45,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        alignSelf: 'center',
        margin: 5,
        marginBottom: 15
    },
    title: {
        fontFamily: fonts.header,
        fontSize: 25,
        color: colors.white,
        textAlign: 'center',
    }
});
