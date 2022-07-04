import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useState } from 'react';

import { FontAwesome as Icon } from '@expo/vector-icons';
import fonts from '../styles/fonts';

import { Header } from '../components/header';
import colors from '../styles/colors';

export default function App() {

  const [codigo, setCodigo] = useState(0);
  const [selectedOption, setSelectedOption] = useState(1);

  return (
    <View style={styles.container} >
      <Header
        title="cadastro"
      />

      <View style={styles.inputField} >
        <TextInput
          style={styles.input}
          placeholder="Nome"
          keyboardType="name-phone-pad"
          onChangeText={(codigo) => setCodigo(Number(codigo))}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="name-phone-pad"
          onChangeText={(codigo) => setCodigo(Number(codigo))}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          keyboardType="numeric"
          onChangeText={(codigo) => setCodigo(Number(codigo))}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          keyboardType="name-phone-pad"
          onChangeText={(codigo) => setCodigo(Number(codigo))}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          keyboardType="name-phone-pad"
          onChangeText={(codigo) => setCodigo(Number(codigo))}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento"
          keyboardType="name-phone-pad"
          onChangeText={(codigo) => setCodigo(Number(codigo))}
        />
        <TextInput
          style={styles.input}
          placeholder="Categoria"
          keyboardType="name-phone-pad"
          onChangeText={(codigo) => setCodigo(Number(codigo))}
        />


        <TextInput
          style={styles.input}
          placeholder="Foto"
          keyboardType="name-phone-pad"
          onChangeText={(codigo) => setCodigo(Number(codigo))}
        />
      </View>

      <View style={styles.lineItems}>
        <View style={styles.line} />

        <Text style={styles.textLine}> ou use </Text>

        <View style={styles.line} />
      </View>

      <View style={styles.iconsLine}>
        <View style={styles.iconDiv}>
          <Icon
            name="facebook-f"
            style={styles.icon}
          />
        </View>

        <View style={styles.iconDiv}>
          <Icon
            name="google"
            style={styles.icon}
          />
        </View>
        <View style={styles.iconDiv}>
          <Icon
            name="apple"
            style={styles.icon}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputField: {
    justifyContent: 'center',
    alignContent: 'center',
    margin: 15
  },
  input: {
    backgroundColor: colors.gray,
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
  }
});
