import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

import fonts from '../styles/fonts';

import { Header } from '../components/header';
import { Button } from '../components/button';

import colors from '../styles/colors';

export function PaginaCadastro({ navigation }) {

  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState(0);
  const [selectedOption, setSelectedOption] = useState(1);
  const [date, setDate] = useState('09-10-2020');

  function handleStart() {
    navigation.navigate('PaginaHome', { nome: nome });
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
        
       <View style={styles.input}>
          <DateTimePicker value={new Date()}
            display="calendar"
            mode="date" //The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-2016"
            maxDate="01-01-2019"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
          />
        </View>
        

<View  style={[styles.input, {paddingLeft: 10}]}>
        <Picker
          selectedValue={selectedOption}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedOption(itemValue)
          }
          >
          <Picker.Item style={{fontFamily: fonts.textB,
            fontSize: 14,
            color: colors.grayInput}} label="Categoria" value="1" />
          <Picker.Item style={{fontFamily: fonts.textB,
            fontSize: 14,
            color: colors.grayInput}}label="idoso" value="2" />
          <Picker.Item style={{fontFamily: fonts.textB,
            fontSize: 14, fontWeight: 'bold', color: colors.grayInput}}label="familiar" value="3" />
        </Picker>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Foto"
          keyboardType="name-phone-pad"
          onChangeText={(codigo) => setCodigo(Number(codigo))}
        />
      </View>

      <Button
        text="cadastrar"
        onPress={handleStart}
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
