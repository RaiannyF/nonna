import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput
} from 'react-native';

import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.0.107:3333';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { useState } from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Button } from '../components/button';


export function PaginaSenha({ navigation }) {
    const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState(0);
  const [endereco, setEndereco] = useState('');
  const [senha, setSenha] = useState('');
  const [categoria, setCategoria] = useState('');

  async function cadastrarUsuario() {
    const usuario = {
      nome,
      email,
      telefone,
      endereco,
      senha,
      categoria
    };
    try {
      await axios.put('/usuarios/1', usuario);
      alert("Senha alterada com sucesso!!!");

    } catch (err) {
      console.log(err);
    }
  }

    return (
        <View style={styles.container} >
            <Header
                title="informações" />

            <View style={{ marginLeft: 30, marginTop: 30, marginBottom: 30 }}>
                <Text style={styles.text}>
                    Dona Lilian
                </Text>
                <Text style={styles.subtext}>
                    E-mail: gardner.lilian@gmail.com {'\n'}
                    Telefone: (31)94002-8922 {'\n'}
                    Endereço: Rua Custódio Silva, 13, Palmeiras {'\n'}
                    Data de nascimento: 13/12/1951 {'\n'}
                    Senha: ********
                </Text>
            </View>

            <Button
                text="alterar senha"
                onPress = {cadastrarUsuario}
            />

            <View style={styles.inputField}>
                <TextInput
                    style={styles.input}
                    placeholder="Nova senha"
                    keyboardType="name-phone-pad"
                    onChangeText={(senha) => setSenha(String(senha))}
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
        paddingVertical: 10,
        marginTop: 10
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
