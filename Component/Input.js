import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
    return (
        <View style={{marginTop: 25}}>
            <code style={{fontSize: 20, fontWeight: '400', color:'#dedede', marginBottom: 5, marginLeft: 5}}>{props.text}</code>
            <TextInput placeholder={props.placeholder} placeholderTextColor='#000' textAlignVertical='center' style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        width: '100%',
        backgroundColor: '#fedc56',
        borderRadius: 10,
        fontSize: 15,
        padding: 10
    }
})

export default Input
