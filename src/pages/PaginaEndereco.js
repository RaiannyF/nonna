import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { useState } from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Button } from '../components/button';

export function PaginaEndereco({ navigation }) {
    const [nome, setNome] = useState('');

    return (
        <View style={styles.container} >
            <Header
                title="alterar endereço" />

            <View style={{ marginLeft: 30, marginTop: 20, marginBottom: 10 }}>
                <Text style={styles.text}>
                    Endereço atual
                </Text>
                <Text style={styles.subtext}>
                    Cidade: Ponte Nova {'\n'}
                    Bairro: Palmeiras {'\n'}
                    Rua: Rua Custódio Silva {'\n'}
                    Número: 13 {'\n'}
                    Complemento: Casa
                </Text>
            </View>

            <Button
                text="alterar"
            />

            <View style={styles.inputField}>
                <TextInput
                    style={styles.input}
                    placeholder="Cidade"
                    keyboardType="name-phone-pad"
                    onChangeText={(nome) => setNome(String(nome))}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Bairro"
                    keyboardType="name-phone-pad"
                    onChangeText={(nome) => setNome(String(nome))}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Rua"
                    keyboardType="name-phone-pad"
                    onChangeText={(nome) => setNome(String(nome))}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Número"
                    keyboardType="name-phone-pad"
                    onChangeText={(nome) => setNome(String(nome))}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Complemento"
                    keyboardType="name-phone-pad"
                    onChangeText={(nome) => setNome(String(nome))}
                />
            </View>

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    text: {
        fontFamily: fonts.textB,
        fontSize: 23,
        color: colors.grayText
    },
    subtext: {
        fontFamily: fonts.text,
        fontSize: 15,
        color: colors.grayText
    },
    inputField: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: colors.border,
        marginHorizontal: 30,
        marginBottom: 10,
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    input: {
        backgroundColor: colors.gray,
        fontFamily: fonts.textB,
        fontSize: 14,
        color: colors.grayText,
        width: 270,
        height: 45,
        borderRadius: 15,
        paddingLeft: 20,
        margin: 5
    }
});
