import React from 'react'
import { View, StyleSheet } from 'react-native'
import Input from '../Component/Input'

const Addfriend = ({navigation}) => {
    return (
        <View style={styles.inputview}>
            <View style={{marginHorizontal: 20, marginTop: 15,}}>
                <Input text="Username" placeholder="TheVikCode" />
                <View style={{height: 1, width: '100%', backgroundColor: '#dedede', marginTop: 10}} />
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
                <code style={{fontSize: 25, fontWeight: 'bold', marginTop: 30, alignSelf: 'center', color: '#fff'}} onClick={() => navigation.navigate('ContactList')}>ADD</code>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputview: {
        backgroundColor: '#4d0099',
        width: '100%',
        height: '100%'
    },
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

export default Addfriend
