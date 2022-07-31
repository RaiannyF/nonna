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

import {useNavigation} from '@react-navigation/native';

export function CardBox({ ...rest }) {
    const navigation = useNavigation();
    return (
        <View
            style={styles.container}
            {...rest}
        >
            <View style={styles.box}>
                <Text style={styles.name}>MENSAL</Text>
                <View style={styles.price}>
                    <Text style={styles.nameB}>R$</Text>
                    <Text style={[styles.name, { fontSize: 35 }]}>54,90</Text>
                </View>
            </View>

            <View style={styles.info}>
                <Text style={styles.infoText}>
                ⠂6 Caixa NONNA surpresa; {'\n'}
                ⠂ Fidelidade de 6 meses; {'\n'}
                ⠂Cobrança Mensal.
                </Text>
            </View>

            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('PaginaCompra')}
            >
                <Text style={[styles.name, { fontSize: 35 }]}> ASSINE > </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.pinkBox,
        borderRadius: 7,
        width: '88%',
        alignSelf: 'center',
        shadowOpacity: 2,
        elevation: 3,
        marginBottom: 15
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.boxName,
        width: '98%',
        height: 90,
        borderRadius: 7,
        alignSelf: 'center',
        marginTop: 3
    },
    price: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontFamily: fonts.textB,
        fontSize: 20,
        color: colors.grayText,
    },
    nameB: {
        fontFamily: fonts.text,
        fontSize: 15,
        color: colors.grayText
    },
    info: {
        marginLeft: 45,
        marginVertical: 15
    },
    infoText: {
        fontFamily: fonts.text,
        fontSize: 15,
        color: colors.grayText,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.boxName,
        width: '90%',
        height: 60,
        borderRadius: 7,
        alignSelf: 'center',
        marginBottom: 10
    },
});
