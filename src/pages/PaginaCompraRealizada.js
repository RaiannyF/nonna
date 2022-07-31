import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

export function PaginaCompraRealizada({ navigation }) {

    return (
        <View style={styles.container} >
            <Header
                title="compra" />

            <View style={styles.info}>

                <Text style={styles.text}>
                    Compra realizada com sucesso!
                    Obrigado!
                </Text>

                <Text style={[styles.text, { fontSize: 15 }]}>
                    Informações sobre o pedido serão enviadas por mensagem para o número cadastrado da conta.
                </Text>
            </View>

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignContent: 'center',
    },
    info: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: fonts.text,
        fontSize: 23,
        color: colors.grayText,
        textAlign: 'center',
        marginVertical: 15
    },
});
