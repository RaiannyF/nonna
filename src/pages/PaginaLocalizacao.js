import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import MapView from 'react-native-maps';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

export function PaginaLocalizacao({ navigation }) {

    return (
        <View style={styles.container} >
            <Header
                title="localização" />

            <Text style={styles.text}>
                Localização atual de <Text style={[styles.text, {fontFamily: fonts.textB}]}>Dona Lílian</Text>
                </Text>

            <MapView
                style={styles.map}
                loadingEnabled={true}
                region={{
                    latitude: 48.860596,
                    longitude: 2.337009,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}></MapView>

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
    text: {
        fontFamily: fonts.text,
        fontSize: 23,
        color: colors.grayText,
        marginTop: 25,
        marginBottom: 500
    },
    map: {
        position: 'absolute',
        top: 180,
        left: 25,
        right: 25,
        bottom: 70,
    },
});
