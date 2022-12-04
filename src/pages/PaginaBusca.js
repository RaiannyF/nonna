import React, { useEffect, useState } from 'react';

import {
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView
} from 'react-native';

import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.0.107:3333';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

import { CardFilter } from '../components/cardFilter';
import { CardLocal } from '../components/cardLocal';

export function PaginaBusca({ navigation }) {

    const [response, setResponse] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [load, setLoad] = useState(true);


    useEffect(() => {
        navigation.addListener('focus', () => {
            setLoad(!load);
        });

        async function listarEstabelecimentos() {
            setLoading(true);
            try {
                const res = await axios.get('/estabelecimentos');
                setResponse(res.data);
                setError("");
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        listarEstabelecimentos();
    }, [load, navigation]);

    const [codigo, setCodigo] = useState(0);

    function handleEstabelecimento(){
        navigation.navigate('PaginaEstabelecimento');
    }

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
                {response.map(estabelecimento => (
                    <CardLocal key={String(estabelecimento.codigo)}
                        photo={estabelecimento.foto}    
                        name={estabelecimento.nome}
                        street={estabelecimento.rua}
                        adress={estabelecimento.bairro}

                        onPress={handleEstabelecimento}
                    />
                ))}

            </ScrollView>

            <View style={{ height: 55 }}></View>
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
