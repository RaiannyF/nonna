import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import fonts from '../styles/fonts';

import { Header } from '../components/header';
import colors from '../styles/colors';
import { CardFamily } from '../components/cardFamily';
import { Footer } from '../components/footer';


export function PaginaHome( { navigation, route}) {
  return (
    <View style={styles.container} >
      <Header
        title="nonna" />

      <View style={styles.textHeader}>
        <Text style={styles.text}>Olá,</Text>
        <Text style={styles.text}><Text style={styles.textBold}>{route.params.nome}</Text>! :) </Text>
      </View>

      <View style={styles.line}></View>

      <Text style={styles.title}>familiares conectados</Text>

      <View style={styles.cards}>
        <CardFamily
          name="Elsa Gardner"
          adress="São Paulo (SP)"
          photo="https://www.postavy.cz/foto/elsa-gardner-foto.jpg"
        />

        <CardFamily
          name="Casey Gardner"
          adress="São Paulo (SP)"
          photo="https://i.pinimg.com/736x/b1/25/48/b125483ed0f15a774abe0208064ecd37.jpg"
        />
        <CardFamily
          name="Doug Gardner"
          adress="São Paulo (SP)"
          photo="data:image/jpeg;base64,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"
        />
        <CardFamily
          name="Sammuel Gardner"
          adress="São Paulo (SP)"
          photo="https://cdn.acritica.net/img/pc/920/600/dn_arquivo/2021/07/rw.jpg.webp"
        />

        <Footer/>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
