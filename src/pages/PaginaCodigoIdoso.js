import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

import { Ionicons } from '@expo/vector-icons';

export function PaginaCodigoIdoso({ navigation }) {

    return (
        <View style={styles.container} >
            <Header
                title="código" />

            <View style={styles.info}>
                <Text style={styles.codeText}>
                    Código do perfil:
                </Text>
                <Text style={styles.code}>
                    1989TS
                </Text>
                <TouchableOpacity>
                    < Ionicons
                        name="copy-outline"
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>

            <Text style={styles.text}>
                Compartilhe o código com um familiar para vocês se conectarem! Basta inseri-lo na aba “conectar com código” e pronto!
            </Text>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.white
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 50,
    },
    codeText: {
        fontFamily: fonts.textB,
        fontSize: 22,
        color: colors.grayText,
        marginRight: 15
    },
    code: {
        fontFamily: fonts.text,
        fontSize: 22,
        color: colors.grayText,
        textDecorationLine: 'underline',
        marginRight: 15
    },
    icon: {
        fontSize: 15,
        color: colors.grayText,
    },
    text: {
        fontFamily: fonts.text,
        fontSize: 20,
        color: colors.grayButton,
        textAlign: 'justify',
        marginHorizontal: 20,
        marginBottom: 350
    }
});
