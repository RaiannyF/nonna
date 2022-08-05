import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { useNavigation } from '@react-navigation/native';

export function CardProduct({ name, price, photo, ...rest }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('PaginaProduto')}
        >
            <Image
                source={{ uri: photo }}
                style={styles.image} />

            <View style={{marginLeft: 15}}>
                <Text style={styles.name}>
                    {name}
                </Text>

                <Text style={styles.price}>{price}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 30,
        marginVertical: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
    name: {
        fontFamily: fonts.textB,
        fontSize: 20,
        color: colors.grayText
    },
    price: {
        fontFamily: fonts.text,
        fontSize: 15,
        color: colors.grayInput
    }
});
