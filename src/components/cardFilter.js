import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { FontAwesome5 as Icon} from '@expo/vector-icons';

export function CardFilter({ name, icon, ...rest }) {
   
    return (
        <View style={styles.container}>
            <View style={styles.iconBox}>
                <Icon
                    name={icon}
                    style={styles.icon}
                />
            </View>

            <Text style={styles.name}>
                {name}
            </Text>


        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        marginLeft: 20,
        marginBottom: 30
    },
    iconBox: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.pink,
        borderRadius: 15,
        width: 100,
        height: 100,
        borderWidth: 2
    },
    icon: {
        fontSize: 40,
        color: colors.pink
    },
    name: {
    fontFamily: fonts.textB,
    fontSize: 15,
    color: colors.grayInput,
    margin: 5
    }
});
