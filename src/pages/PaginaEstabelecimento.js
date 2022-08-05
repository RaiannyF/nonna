import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

import { CardProduct } from '../components/cardProduct';

import photo from '../assets/drogaria.png';

import { Feather } from '@expo/vector-icons';

export function PaginaEstabelecimento({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Header
                    title="farmácia" />

                <View style={styles.info}>
                    <Text style={styles.title}>Drogaria Ômega</Text>
                    <Image
                        source={photo}
                        style={styles.image}
                    />
                    <View style={styles.buttonInfo}>
                        <Feather
                            name="map-pin"
                            style={styles.icon}
                        />
                        <View style={{ width: 250 }}>
                            <Text style={styles.buttonText}>
                                Rua Assad Zaidan, Palmeiras, nº 84 {'\n'}
                                Ponte Nova - MG
                            </Text>
                        </View>
                        <Feather
                            name="arrow-right"
                            style={styles.iconArrow}
                        />
                    </View>
                    <View style={styles.buttonInfo}>
                        <Feather
                            name="phone"
                            style={styles.icon}
                        />
                        <View style={{ width: 250 }}>
                            <Text style={styles.buttonText}>
                                (31) 3817-3608
                            </Text>
                        </View>
                        <Feather
                            name="arrow-right"
                            style={styles.iconArrow}
                        />
                    </View>

                    <Text style={styles.title}>Produtos</Text>
                    <ScrollView style>
                        <CardProduct
                            name="Antidepressivo"
                            price="R$58,60"
                            photo="https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/03/comprimidos-750x430-1-418x235.jpg"
                        />
                        <CardProduct
                            name="Ômega 3"
                            price="R$02,90"
                            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKGHZiRYISfJ8bT1kKna-46ovT24q03MzhsuKUC3a54nnBGcmuD3gcP9Mznldo9ey3mQ&usqp=CAU"
                        />
                    </ScrollView>
                </View>
            </ScrollView>

            <View style={{ height: 55 }}></View>
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
        justifyContent: 'center',
    },
    title: {
        fontFamily: fonts.textB,
        fontSize: 25,
        color: colors.grayText,
        alignSelf: 'flex-start',
        marginLeft: 30,
        marginTop: 20,
        marginBottom: 10
    },
    image: {
        width: 300,
        height: 150,
        borderRadius: 10,
        marginBottom: 25,
        alignSelf: 'center'
    },
    buttonInfo: {
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8
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
    }
});
