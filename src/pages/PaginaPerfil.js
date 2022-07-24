import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

import { Ionicons, Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

export function PaginaPerfil({ navigation }) {
    return (
        <View style={styles.container} >
            <Header
                title="perfil" />

            <View style={styles.info}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/originals/7c/25/f5/7c25f5bbc19745539d124808eb0ad168.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.name}>
                    Dona Lílian
                </Text>
            </View>

            <View style={styles.buttonInfo}>

                <View style={styles.line} />
                <TouchableOpacity style={styles.button}
                 onPress={() => navigation.navigate('PaginaLocalizacao')}
                >
                    <MaterialCommunityIcons
                        name="account-circle-outline"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>
                        Informações da conta
                    </Text>
                </TouchableOpacity>

                <View style={styles.line} />
                <TouchableOpacity style={styles.button}>
                    <AntDesign
                        name="setting"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>
                        Configurações
                    </Text>
                </TouchableOpacity>

                <View style={styles.line} />
                <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('PaginaAjuda')}
                >
                    <Feather
                        name="info"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>
                        Ajuda
                    </Text>
                </TouchableOpacity>

                <View style={styles.line} />
                <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('PaginaCodigoFamiliar')}
                >
                    <Ionicons
                        name="share-social-outline"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>
                        Conectar com código
                    </Text>
                </TouchableOpacity>

                <View style={styles.line} />
                <TouchableOpacity style={styles.button}>
                    <Ionicons
                        name="ios-log-out-outline"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>
                        Sair
                    </Text>
                </TouchableOpacity>
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
        marginBottom: 60
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
        height: 65,
        marginLeft: 30
    },
    icon: {
        fontSize: 24,
        color: colors.grayButton,
        marginRight: 20
    },
    text: {
        fontFamily: fonts.text,
        fontSize: 15,
        color: colors.grayButton,

    }
});
