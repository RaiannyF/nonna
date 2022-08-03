import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

import { useState } from 'react';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

import { Picker } from '@react-native-picker/picker';
import { Feather } from '@expo/vector-icons';
import { Button } from '../components/button';


export function PaginaCompra({ navigation }) {
    const [selectedOption, setSelectedOption] = useState(1);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    title="compra" />

                <View style={styles.info}>
                    <Text style={styles.text}>
                        Plano:

                    </Text>
                    <Text style={styles.subtext}>
                        Mensal
                    </Text>

                </View>
                <View style={styles.line} />

                <View style={styles.info}>
                    <Text style={styles.text}>
                        Para:
                    </Text>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={selectedOption}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedOption(itemValue)
                            }
                        >
                            <Picker.Item style={styles.subtext} label="" value="1" />
                            <Picker.Item style={styles.subtext} label="Você" value="2" />
                            <Picker.Item style={styles.subtext} label="Dona Lílian" value="3" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.line} />


                <View style={styles.info}>

                    <View style={styles.lineInfo}>

                        <Text style={styles.text}>Endereço:</Text>
                        <Feather
                            name="arrow-right"
                            style={styles.icon}
                            onPress={() => navigation.navigate('PaginaEndereco')}
                        />

                    </View>
                    <Text style={styles.subtext}>
                        Rua Custódio Silva, 13, Palmeiras, Ponte...
                    </Text>

                </View>
                <View style={styles.line} />

                <View style={styles.info}>
                    <Text style={styles.text}>
                        Forma de pagamento:
                    </Text>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={selectedOption}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedOption(itemValue)
                            }
                        >
                            <Picker.Item style={styles.subtext} label="" value="1" />
                            <Picker.Item style={styles.subtext} label="Cartão de Crédito" value="2" />
                            <Picker.Item style={styles.subtext} label="Pix" value="3" />
                        </Picker>
                    </View>

                </View>
                <View style={styles.line} />

                <View style={styles.info}>
                    <Text style={styles.text}>Resumo do pedido:</Text>

                    <View style={styles.lineInfo}>
                        <Text style={styles.subtext}>Subtotal:</Text>
                        <Text style={styles.subtext}>R$54,90</Text>
                    </View>

                    <View style={styles.lineInfo}>
                        <Text style={styles.subtext}>Frete:</Text>
                        <Text style={styles.subtext}>R$0,00</Text>
                    </View>

                    <View style={styles.lineInfo}>
                        <Text style={styles.subtext}>Desconto:</Text>
                        <Text style={styles.subtext}>R$0,00</Text>
                    </View>

                </View>


                <View style={[styles.lineInfo, styles.info]}>
                    <Text style={[styles.subtext, { fontSize: 20 }]}>total:</Text>
                    <Text style={[styles.text, { fontSize: 20 }]}>R$54,90</Text>

                </View>

                <Button
                    text="confirmar compra"
                    onPress={() => navigation.navigate('PaginaCompraRealizada')}
                />
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
    },
    info: {
        marginLeft: 30,
        marginVertical: 20
    },
    text: {
        fontFamily: fonts.textB,
        fontSize: 25,
        color: colors.grayText
    },
    subtext: {
        fontFamily: fonts.text,
        fontSize: 15,
        color: colors.grayText
    },
    line: {
        height: 1,
        backgroundColor: colors.grayLineThree,
        opacity: 0.5
    },
    lineInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 25
    },
    icon: {
        color: colors.grayInput,
        fontSize: 16,
    },
    picker: {
        height: 30,
        marginTop: -15,
        marginLeft: -7,
        marginBottom: 10
    }
});
