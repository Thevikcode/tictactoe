import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const Selectbot = ({navigation}) => {
    return (
        <View style={{backgroundColor: '#4d0099', width: '100%', height: '100%'}}>
            <View style={{marginTop: 50, marginLeft: 25, }} >
                <code style={{fontSize: 35, fontWeight: '700', marginBottom: 5, color: '#fff'}}>Select Difficulty</code>
                <View style={{height: 2, width: '40%', backgroundColor: '#fedc56'}} /> 
            </View>
            <View style={styles.Select} onClick={() => navigation.navigate('Game')}>
                <Ionicons name='people' size={35} color='#fff' />
                <code style={{fontSize: 35, fontWeight: '600', color: '#fff'}}>Easy Bot</code>
            </View>
            <View style={styles.Select2} onClick={() => navigation.navigate('Game')}>
                <Ionicons name='people' size={35} color='#fff' />
                <code style={{fontSize: 35, fontWeight: '600', color: '#fff'}}>Hard Bot</code>
            </View>
            <View style={styles.Select3} onClick={() => navigation.navigate('Game')}>
                <Ionicons name='people' size={35} color='#fff' />
                <code style={{fontSize: 35, fontWeight: '600', color: '#fff'}}>Very Hard Bot</code>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Select: {
        marginTop: 75,
        alignSelf: 'center',
        height: 100,
        width: '75%',
        borderWidth: 2,
        backgroundColor: '#4d4dff',
        borderColor: '#dedede',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Select2: {
        marginTop: 75,
        alignSelf: 'center',
        height: 100,
        width: '75%',
        borderWidth: 2,
        backgroundColor: '#00ffd5',
        borderColor: '#dedede',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Select3: {
        marginTop: 75,
        alignSelf: 'center',
        height: 100,
        width: '75%',
        borderWidth: 2,
        backgroundColor: '#ff8000',
        borderColor: '#dedede',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Selectbot
