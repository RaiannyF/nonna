import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import axios from 'axios';
axios.defaults.baseURL = 'http://10.140.20.155:3333';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { Header } from '../components/header';
import { CardFamily } from '../components/cardFamily';
import { Footer } from '../components/footer';

export function PaginaHome({ navigation, route }) {

  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);

  const [code, setCode] = useState("");

  useEffect(() => {
    navigation.addListener('focus', () => {
      setLoad(!load);
    });

    async function listarFamiliares() {
      setLoading(true);
      try {
        const res = await axios.get('/familiares');
        setResponse(res.data);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    listarFamiliares();
  }, [load, navigation]);

  function handleFamiliar(codigo){
    navigation.navigate('PaginaFamiliar', {codigoFamiliar: codigo});
    }

  return (
    <View style={styles.container} >
      <Header
        title="nonna" />

      <View style={styles.textHeader}>
        <Text style={styles.text}>Olá, </Text>
        <Text style={styles.text}><Text style={styles.textBold}>gay</Text>! :) </Text>
      </View>

      <View style={styles.line}></View>

      <Text style={styles.title}>familiares conectados</Text>

      <View style={styles.cards}>
      {response.map(familiar => (
          <CardFamily key={String(familiar.codigo)}
            name={familiar.nome}
            adress={familiar.endereco}
            photo={familiar.foto}

            onPress={handleFamiliar}
          />
        ))}
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  textHeader: {
    marginLeft: 30,
    marginTop: 18
  },
  text: {
    fontFamily: fonts.text,
    fontSize: 22,
    color: colors.grayText
  },
  textBold: {
    fontFamily: fonts.textB
  },
  line: {
    backgroundColor: colors.grayLineTwo,
    alignSelf: 'center',
    height: 1,
    width: '25%',
    opacity: 0.5,
    margin: 15
  },
  title: {
    fontFamily: fonts.text,
    fontSize: 18,
    marginLeft: 30,
    color: colors.grayText
  },
  cards: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});