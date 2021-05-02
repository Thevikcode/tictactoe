import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlayScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textview}>
                <code style={{color: '#fedc56'}}>Tic</code>
                <code style={{color: '#e62117'}}>Tac</code>
                <code style={{color: '#fedc56'}}>Toe</code>
            </View>
            <View style={{marginTop: 60}}>
                <View style={styles.SinglePlayer} onClick={ () => {navigation.navigate('Selectbot')}}>
                    <code style={{fontSize: 25, fontWeight: '600', color: '#000'}}>Single Player</code>
                </View>
                <View style={styles.SinglePlayer} onClick={ () => {navigation.navigate('ContactList')}}>
                    <code style={{fontSize: 25, fontWeight: '600', color: '#000'}}>Play With Friends</code>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4d0099',
        width: '100%',
        height: '100%'
    },
    textview: {
        marginTop: 25,
        alignItems: 'center',
        fontSize: 100,
        fontWeight: 'bold'
    },
    SinglePlayer: {
        marginTop: 30,
        alignSelf: 'center',
        height: 65,
        width: '75%',
        backgroundColor: '#fedc56',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default PlayScreen
