import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const ContactList = ({navigation}) => {
    return (
        <View style={{backgroundColor: '#4d0099', width: '100%', height: '100%'}}>
            <View style={{marginTop: 50, marginHorizontal: 25, }} >
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <code style={{fontSize: 35, fontWeight: '700', marginBottom: 5, color: '#fff'}}>Friend List</code>
                    <Ionicons name='add' size={40} color='#fff' onClick={() => navigation.navigate('Addfriend')} />
                </View>
                <View style={{height: 2, width: '40%', backgroundColor: '#fedc56'}} /> 
            </View>    
            <View style={styles.Friends}>
                <code style={{fontSize: 35, fontWeight: '600', color: '#fff'}}>1.TheVikCode</code>
            </View> 
            <View style={styles.Friends}>
                <code style={{fontSize: 35, fontWeight: '600', color: '#fff'}}>2.TheVikCode</code>
            </View> 
            <View style={styles.Friends}>
                <code style={{fontSize: 35, fontWeight: '600', color: '#fff'}}>3.TheVikCode</code>
            </View> 
            <View style={styles.Friends}>
                <code style={{fontSize: 35, fontWeight: '600', color: '#fff'}}>4.TheVikCode</code>
            </View>
            <code onClick={() => navigation.navigate('Game')} style={{alignSelf: 'center', marginTop: 50, fontSize: 30, fontWeight: 'bold', color: '#fff'}}>START</code>                
        </View>
    )
}

const styles = StyleSheet.create({
    Friends: {
        marginTop: 50,
        alignSelf: 'center',
        height: 75,
        width: '75%',
        borderWidth: 2,
        backgroundColor: '#4d4dff',
        borderColor: '#dedede',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default ContactList
