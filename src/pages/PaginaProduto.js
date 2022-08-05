import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

import { Feather, FontAwesome } from '@expo/vector-icons';

export function PaginaProduto({ navigation }) {
    return (
        <View style={styles.container} >
            <Header
                title="produto" />

            <Image
                source={{ uri: "https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/03/comprimidos-750x430-1-418x235.jpg" }}
                style={styles.image}
            />

            <Text style={styles.name}>
                Antidepressivo
            </Text>
            <Text style={[styles.name, { fontFamily: fonts.text }]}>
                R$58,60
            </Text>

            <Text style={[styles.name, { marginTop: 30 }]}>
                Informações:
            </Text>
            <Text style={[styles.name, { fontFamily: fonts.text, textAlign: 'justify', marginRight: 30, marginBottom: 10 }]}>
                Para comprar o produto entre diretamente em contato com a loja pelo telefone ou WhatsApp que constam abaixo.
            </Text>

            <View style={styles.buttonInfo}>
                <Feather
                    name="phone"
                    style={styles.icon}
                />
                <View style={{ width: 260 }}>
                    <Text style={styles.buttonText}>
                        (31) 3817-3608
                    </Text>
                </View>
                <Feather
                    name="arrow-right"
                    style={styles.iconArrow}
                />
            </View>

            <View style={styles.line} />

            <View style={styles.buttonInfo}>
                <FontAwesome
                    name="whatsapp"
                    style={styles.icon}
                />
                <View style={{ width: 260 }}>
                    <Text style={styles.buttonText}>
                        (31) 3817-3608
                    </Text>
                </View>
                <Feather
                    name="arrow-right"
                    style={styles.iconArrow}
                />
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
    image: {
        width: 300,
        height: 130,
        borderRadius: 15,
        alignSelf: 'center',
        marginVertical: 20
    },
    name: {
        fontFamily: fonts.textB,
        fontSize: 20,
        color: colors.grayText,
        marginLeft: 25
    },
    buttonInfo: {
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    icon: {
        fontSize: 28,
        color: colors.grayButton,
    },
    buttonText: {
        fontFamily: fonts.text,
        fontSize: 15,
        color: colors.grayInput,
        marginHorizontal: 15
    },
    iconArrow: {
        fontSize: 18,
        color: colors.grayInput
    },
    line: {
        height: 2,
        width: '50%',
        backgroundColor: colors.grayLineTwo,
        alignSelf: 'center'
    },
});
