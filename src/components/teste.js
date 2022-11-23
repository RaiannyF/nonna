import React from 'react';
import { Feather as Icon} from '@expo/vector-icons';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export function ProductCard({codigo, nome, editarProduto, excluirProduto}){
    return (
        <View style={styles.viewCard}>
            <View style={styles.viewCodigo}>
                <Text style={styles.textCard}>{codigo}</Text>
            </View>
            <View style={styles.viewNome}>
                <Text style={styles.textCard}>{nome}</Text>
            </View>
            <View style={styles.viewButtons}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={editarProduto}
                >
                    <Icon 
                        name="edit"
                        size={24}
                        color={'#22FF55'}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={excluirProduto}
                >
                    <Icon 
                        name="trash"
                        size={24}
                        color={'#FF0000'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewCard: {
        backgroundColor: '#FFFFFF',
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: '#DADADA',
        borderBottomWidth: 2
    },
    viewCodigo: {
        alignItems: 'center',
        width: '10%'
    },
    viewNome: {
        width: '65%'
    },
    textCard: {
        fontSize: 18
    },
    viewButtons: {
        width: '25%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})