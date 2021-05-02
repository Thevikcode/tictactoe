import React from 'react'
import { View, Text } from 'react-native'

const Grid = () => {
    return (
        <View style={{width: 400, height: 400, backgroundColor: '#df73ff', borderRadius: 10, marginTop: 10, padding: 5}}>
            <View style={{flexDirection: 'row'}}>
                <View style={{height: 110, width: 110, backgroundColor: '#dedede', borderRadius: 10, margin: 10}} />
                <View style={{height: 110, width: 110, backgroundColor: '#dedede', borderRadius: 10, margin: 10}} />
                <View style={{height: 110, width: 110, backgroundColor: '#dedede', borderRadius: 10, margin: 10}} />
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{height: 110, width: 110, backgroundColor: '#dedede', borderRadius: 10, margin: 10}} />
                <View style={{height: 110, width: 110, backgroundColor: '#dedede', borderRadius: 10, margin: 10}} />
                <View style={{height: 110, width: 110, backgroundColor: '#dedede', borderRadius: 10, margin: 10}} />
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{height: 110, width: 110, backgroundColor: '#dedede', borderRadius: 10, margin: 10}} />
                <View style={{height: 110, width: 110, backgroundColor: '#dedede', borderRadius: 10, margin: 10}} />
                <View style={{height: 110, width: 110, backgroundColor: '#dedede', borderRadius: 10, margin: 10}} />
            </View>
        </View>
    )
}

export default Grid
