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

import { Entypo, SimpleLineIcons, Feather } from '@expo/vector-icons';

export function PaginaFamiliar({ navigation }) {
    return (
        <View style={styles.container} >
            <Header
                title="familiares" />

            <View style={styles.info}>
                <Image
                    source={{ uri: 'https://www.postavy.cz/foto/elsa-gardner-foto.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.name}>
                    Elsa Gardner
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
                        Rua Santo Antônio, São Paulo - SP
                    </Text>
                </View>

                <View style={styles.line} />
                <View style={styles.button}>
                    <Feather
                        name="phone"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>
                        (31) 99899-8365
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
        height: 2,
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
