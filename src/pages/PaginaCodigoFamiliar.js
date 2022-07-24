import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput
} from 'react-native';

import { useState } from 'react';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

export function PaginaCodigoFamiliar({ navigation }) {
    const [codigo, setCodigo] = useState(0);

    return (
        <View style={styles.container} >
            <Header
                title="código" />

            <View style={styles.info}>
                <Text style={styles.text}>
                    Inserir código:
                </Text>
                <TextInput
                    style={styles.input}
                    keyboardType="name-phone-pad"
                    onChangeText={(codigo) => setCodigo(Number(codigo))}
                />
            </View>

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.white
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 470
    },
    text: {
        fontFamily: fonts.textB,
        fontSize: 22,
        color: colors.grayText,
    },
    input: {
        borderColor: colors.grayText,
        borderWidth: 0.5,
        fontFamily: fonts.text,
        fontSize: 20,
        color: colors.grayButton,
        width: 150,
        height: 40,
        borderRadius: 7,
        marginLeft: 20,
        paddingLeft: 20
    }
});
