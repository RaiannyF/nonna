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
import { Button } from '../components/button';

export function PaginaPlano({ navigation }) {

    return (
        <View style={styles.container} >
            <Header
                title="plano atual" />

            <View style={styles.plano}>
                <Text style={[styles.text, { fontFamily: fonts.textB }]}>
                    Plano:  <Text style={styles.text}>Mensal</Text>
                </Text>
            </View>

            <Text style={[styles.text, { fontFamily: fonts.textB }]}>
                Assinado em:  <Text style={styles.text}>01/04</Text>
            </Text>

            <View style={{ marginBottom: 280 }}>
                <Text style={[styles.text, { fontFamily: fonts.textB }]}>
                    Vence em:  <Text style={styles.text}>06/04</Text>
                </Text>

                <Text style={[styles.text, { fontFamily: fonts.textB }]}>
                    Valor:  <Text style={styles.text}>R$ 54,90</Text>
                </Text>
            </View>

            <Button
                text="cancelar plano"
            />

            <Footer />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    plano: {
        marginTop: 25,
        marginBottom: 30
    },
    text: {
        fontFamily: fonts.text,
        fontSize: 23,
        color: colors.grayText,
        marginLeft: 30,
        marginVertical: 2
    }

});
