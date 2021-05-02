import React from 'react'
import { View, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import Grid from '../Component/Grid';

const Game = () => {
    return (
        <View style={styles.GameView}>
            <code style={{fontSize: 25, fontWeight: '600', color: '#fff', marginTop: 20}}>Tic Tac Toe</code>
            <View style={{height: 1, width: '50%', backgroundColor: '#fedc56', marginTop: 10}} />
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 60}}>
                <View style={{height: 150, width: 125, borderWidth: 1, borderColor: '#dedede', alignItems: 'center', marginRight: 20}}>
                    <code style={{fontSize: 20, fontWeight: '600', color: '#fff'}}>TheVikCode</code>
                    <Ionicons name="person-outline" size={40} color="#fff" style={{marginTop: 25}} />
                    <code style={{fontSize: 20, color: '#4d4dff', marginTop: 15, fontWeight: '600'}}>Cross</code>
                </View>
                <View style={{height: 150, width: 125, borderWidth: 1, borderColor: '#dedede', alignItems: 'center'}}>
                    <code style={{fontSize: 20, fontWeight: '600', color: '#fff'}}>Vinay UK</code>
                    <Ionicons name="person-outline" size={40} color="#fff" style={{marginTop: 25}} />
                    <code style={{fontSize: 20, color: '#4d4dff', marginTop: 15, fontWeight: '600'}}>Circle</code>
                </View>
            </View>
            <Ionicons name="arrow-up" size={25} color="#fff" style={{marginTop: 5, marginLeft: 150}}/>
            <View>
                <Grid />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    GameView: {
        backgroundColor: '#4d0099',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
})

export default Game
