import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    ViewProps
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { FontAwesome5, Ionicons } from '@expo/vector-icons';

export function Footer({...rest }) {
    return (
        <View
            style={styles.container}
            {...rest}
        >
            <View style={styles.buttons}>
                <Ionicons
                    name="home-sharp"
                    style={styles.icon}
                />
            </View>
            <View style={styles.buttons}>
                <FontAwesome5
                    name="search"
                    style={styles.icon}
                />
            </View>
            <View style={styles.buttons}>
                <FontAwesome5
                    name="box-open"
                    style={styles.icon}
                />
            </View>
            <View style={styles.buttons}>
                <FontAwesome5
                    name="user-alt"
                    style={styles.icon}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttons: {
        backgroundColor: colors.grayText,
        width: 35,
        height: 35,
        borderRadius: 17.5,
        marginHorizontal: 28,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: colors.white,
        fontSize: 18
    }
});
