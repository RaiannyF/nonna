import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import caixa from '../assets/caixas.png';

import { CardBox } from '../components/cardBox';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export function PaginaCaixas({ navigation }) {
    return (
        <View style={styles.container} >

            <ScrollView styles={styles.info}
            showsVerticalScrollIndicator={false}>

                <Header
                    title="caixas" />
                <Image
                    source={caixa}
                    style={styles.image}
                />

                <Text style={styles.title}>Caixas Surpresa</Text>
                <Text style={styles.text}>
                    Você conhece nossas caixas surpresa? Elas são uma forma dos seus familiares (ou você mesmo, quem sabe) te presentiarem, com mimos surpresa que visam facilitam a sua vida!
                </Text>

                <Text style={styles.subtitle}>
                    O que vem na caixa?
                </Text>
                <Text style={styles.text}>
                    Bom, é surpresa! Mas uma coisa é certeza: todo mês vai chegar uma nova caixinha com um número fixo de 6 produtos inovadores, curiosos e divertidos, como blusas, objetos de passa tempo, livros direcionados ao público, atividades para fazer com a família... </Text>

                <Text style={styles.subtitle}>
                    Conheça nossos planos:
                </Text>

                <CardBox />
                <CardBox />
                <CardBox />

                <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('PaginaPlano')}
                >
                    <Text style={styles.sub}>
                        Gerenciar plano atual
                    </Text>
                    <Text style={[styles.sub, { marginLeft: 100 }]}>
>
                    </Text>

                </TouchableOpacity>

                <Footer />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    info: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    image: {
        marginLeft: 10,
        marginVertical: 10
    },
    title: {
        fontFamily: fonts.textB,
        fontSize: 24,
        color: colors.grayText,
        marginVertical: 10,
        textAlign: 'center'
    },
    subtitle: {
        fontFamily: fonts.textB,
        fontSize: 18,
        color: colors.grayText,
        marginTop: 25,
        marginBottom: 5,
        marginLeft: 22
    },
    text: {
        fontFamily: fonts.text,
        fontSize: 18,
        color: colors.grayText,
        marginHorizontal: 22,
        textAlign: 'justify'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    sub: {
        fontFamily: fonts.textB,
        fontSize: 18,
        color: colors.grayText,
        marginHorizontal: 26
    }
});
