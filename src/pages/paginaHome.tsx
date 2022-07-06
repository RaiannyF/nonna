import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { Header } from '../components/header';
import { CardFamily } from '../components/cardFamily';
import { Footer } from '../components/footer';

export default function App() {
  return (
    <View style={styles.container} >
      <Header
        title="nonna" />

      <View style={styles.textHeader}>
        <Text style={styles.text}>Olá,</Text>
        <Text style={styles.text}><Text style={styles.textBold}>Dona Lillian</Text>! :) </Text>
      </View>

      <View style={styles.line}></View>

      <Text style={styles.title}>familiares conectados</Text>

      <View style={styles.cards}>
        <CardFamily
          name="Elsa Gardner"
          adress="São Paulo (SP)"
          photo="https://img.buzzfeed.com/store-an-image-prod-us-east-1/yMbV76H2H.png?output-format=jpg&output-quality=auto"
        />

        <CardFamily
          name="Elsa Gardner"
          adress="São Paulo (SP)"
          photo="https://img.buzzfeed.com/store-an-image-prod-us-east-1/yMbV76H2H.png?output-format=jpg&output-quality=auto"
        />
        <CardFamily
          name="Elsa Gardner"
          adress="São Paulo (SP)"
          photo="https://img.buzzfeed.com/store-an-image-prod-us-east-1/yMbV76H2H.png?output-format=jpg&output-quality=auto"
        />
        <CardFamily
          name="Elsa Gardner"
          adress="São Paulo (SP)"
          photo="https://img.buzzfeed.com/store-an-image-prod-us-east-1/yMbV76H2H.png?output-format=jpg&output-quality=auto"
        />

        <Footer
        title="hmmmm"
        />

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
    fontWeight: "bold"
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
