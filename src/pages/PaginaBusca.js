import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView
} from 'react-native';

import { useState } from 'react';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

import { CardFilter } from '../components/cardFilter';
import { CardLocal } from '../components/cardLocal';

export function PaginaBusca({ navigation }) {

    const [codigo, setCodigo] = useState(0);

    return (
        <View style={styles.container} >
            <Header
                title="busca" />

            <TextInput
                style={styles.input}
                placeholder="Digite aqui"
                keyboardType="name-phone-pad"
                onChangeText={(codigo) => setCodigo(Number(codigo))}
            />

            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <CardFilter
                    name="Consultórios"
                    icon="clinic-medical" />

                <CardFilter
                    name="Hospitais"
                    icon="clinic-medical" />

                <CardFilter
                    name="Farmácias"
                    icon="clinic-medical" />

                <CardFilter
                    name="Mercados"
                    icon="clinic-medical" />

            </ScrollView>

            <ScrollView style={styles.scroll}
            showsVerticalScrollIndicator={false}>
                <CardLocal
                    name="H. Arnaldo Gavazza"
                    street="Av. Doutor José Grossi, 54"
                    address="Guarapiranga, Ponte Nova"
                    photo="https://lh3.googleusercontent.com/p/AF1QipM_THFDn20_nHnu1OZUm1JqO_PBFgyr_GeKyTOV=s1600-w400" />


                <CardLocal
                    name="Supermercado Pouppy"
                    street="R. Santo Antônio, 13"
                    address="Santo Antônio, Ponte Nova"
                    photo="https://lh3.googleusercontent.com/p/AF1QipPPXP19qIOfxVl-EGQeyrSeqcCJJ9zvF9E535Mb=s1600-w400" />

                <CardLocal
                    name="H. Nossa Senhora das Dores"
                    street="R. Doutor Leonardo, 200"
                    address="Centro, Ponte Nova"
                    photo="https://www.cisamapi.mg.gov.br/images/migracao/02022019200120_ihnsd.jpg" />

            </ScrollView>

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center'
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
        margin: 25
    },
    local: {
        marginTop: 10,
        alignContent: 'center',
    }

});
