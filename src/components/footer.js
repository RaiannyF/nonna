import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import {useNavigation} from '@react-navigation/native';

import { FontAwesome5, Ionicons } from '@expo/vector-icons';

export function Footer({ ...rest }) {

    const navigation = useNavigation();
    return (
        <View
            style={styles.container}
            {...rest}
        >
            <TouchableOpacity 
            style={styles.buttons}
            onPress={() => navigation.navigate('PaginaHome')}
            >
                <Ionicons
                    name="home-sharp"
                    style={styles.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttons}
            onPress={() => navigation.navigate('PaginaBusca')}
            >
                <FontAwesome5
                    name="search"
                    style={styles.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttons}
            onPress={() => navigation.navigate('PaginaCaixas')}
            >
                <FontAwesome5
                    name="box-open"
                    style={styles.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttons}
            onPress={() => navigation.navigate('PaginaPerfil')}
            >
                <FontAwesome5
                    name="user-alt"
                    style={styles.icon}
                />
            </TouchableOpacity>
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
