import React from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.0.104:3333';

import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

import fonts from '../styles/fonts';

import { Header } from '../components/header';
import { Button } from '../components/button';

import colors from '../styles/colors';

export function PaginaCadastro({ navigation }) {

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
      await axios.post('/usuarios', usuario);
      alert("Salvo com Sucesso!!!");

    } catch (err) {
      console.log(err);
    }
    navigation.navigate('PaginaHome');
  }

  return (
    <View style={styles.container} >
      <Header
        title="cadastro"
      />

      <View style={styles.inputField}>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          keyboardType="name-phone-pad"
          onChangeText={(nome) => setNome(String(nome))}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="name-phone-pad"
          onChangeText={(email) => setEmail(String(email))}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          keyboardType="numeric"
          onChangeText={(telefone) => setTelefone(Number(telefone))}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          keyboardType="name-phone-pad"
          onChangeText={(endereco) => setEndereco(String(endereco))}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          keyboardType="name-phone-pad"
          onChangeText={(senha) => setSenha(String(senha))}
        />

        <View style={[styles.input, { paddingLeft: 10 }]}>
          <Picker
            selectedValue={categoria}
            onValueChange={(itemLabel, itemIndex,) =>
              setCategoria(itemLabel)
            }
          >
            <Picker.Item style={{
              fontFamily: fonts.textB,
              fontSize: 14,
              color: colors.grayInput
            }} label="Categoria" value="1" />
            <Picker.Item style={{
              fontFamily: fonts.textB,
              fontSize: 14,
              color: colors.grayInput
            }} label="idoso" value="2" />
            <Picker.Item style={{
              fontFamily: fonts.textB,
              fontSize: 14, fontWeight: 'bold', color: colors.grayInput
            }} label="familiar" value="3" />
          </Picker>
        </View>
      </View>

      <Button
        text="cadastrar"
        onPress={cadastrarUsuario}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white
  },
  inputField: {
    alignContent: 'center',
    margin: 30
  },
  input: {
    backgroundColor: colors.gray,
    fontFamily: fonts.textB,
    fontSize: 14,
    color: colors.grayInput,
    width: 310,
    height: 48,
    borderRadius: 15,
    paddingLeft: 20,
    margin: 5
  },
  lineItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.grayLine,
    opacity: 0.5
  },
  textLine: {
    width: 75,
    textAlign: 'center',
    color: colors.grayLine,
    fontWeight: "700",
  },
  iconsLine: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  iconDiv: {
    alignContent: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: colors.pink,
    borderRadius: 15,
    marginHorizontal: 12,
    marginVertical: 20
  },
  icon: {
    color: colors.white,
    fontSize: 30,
    textAlign: 'center'
  },
  picker: {
    backgroundColor: colors.gray,
    fontFamily: fonts.textB,
    fontSize: 14,
    color: colors.grayInput,
    width: 310,
    height: 48,
    borderRadius: 15,
    paddingLeft: 10,
    margin: 5
  }
});
