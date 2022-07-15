import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    ViewProps
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function Header({ title, ...rest }) {
    return (
        <View
            style={styles.container}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.pink,
        width: '100%',
        height: 96,
        alignContent: 'center',
    },
    title: {
        fontFamily: fonts.header,
        fontSize: 40,
        color: colors.white,
        textAlign: 'center',
        marginTop: 38
    }
});
