import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';

import axios from 'axios';
axios.defaults.baseURL = 'http://10.140.20.155:3333';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

import { Entypo, SimpleLineIcons, Feather } from '@expo/vector-icons';

export function PaginaFamiliar({ navigation, route }) {

    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [foto, setFoto] = useState('');

    useEffect(() => {
        async function buscarFamiliar(codigo) {
            try {
                const response = await axios.get(`/familiares/${codigo}`);
                setNome(response.data[0].nome);
                setEndereco(response.data[0].endereco);
                setTelefone(response.data[0].telefone);
                setFoto(response.data[0].foto);
            } catch (err) {
                console.log(err);
            }
        }
        const codigo = route.params.codigoFamiliar;

        if (codigo != 0)
            buscarFamiliar(codigo);
    }, []);
    return (
        <View style={styles.container} >
            <Header
                title="familiares" />

            <View style={styles.info}>
                <Image
                    source={{ uri: foto }}
                    style={styles.image}
                />
                <Text style={styles.name}>
                   {nome}
                </Text>
            </View>

            <View style={styles.buttonInfo}>

                <View style={styles.line} />
                <View style={styles.button}>
                    <SimpleLineIcons
                        name="location-pin"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>
                        {endereco}
                    </Text>
                </View>

                <View style={styles.line} />
                <View style={styles.button}>
                    <Feather
                        name="phone"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>
                       {telefone}
                    </Text>
                </View>
                <View style={styles.line} />
                <View style={styles.button}>
                    <Entypo
                        name="cross"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>
                        Desconectar familiar
                    </Text>
                </View>
                <View style={styles.line} />
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
    info: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 50,
        marginLeft: 20
    },
    image: {
        alignSelf: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
        marginHorizontal: 10
    },
    name: {
        fontFamily: fonts.text,
        fontSize: 25,
        color: colors.grayText,
        marginLeft: 10
    },
    buttonInfo: {
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 190
    },
    line: {
        height: 1,
        backgroundColor: colors.grayLineThree,
        opacity: 0.5
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 65
    },
    icon: {
        fontSize: 24,
        color: colors.grayButton,
        marginLeft: 30,
        marginRight: 20
    },
    text: {
        fontFamily: fonts.text,
        fontSize: 15,
        color: colors.grayButton,

    }
});