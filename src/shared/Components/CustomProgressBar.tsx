import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomProgressBar({progressbarWidth}) {
    return (
        <View style={[{width:progressbarWidth},styles.progrssBar]}></View>
    )
}

const styles = StyleSheet.create({
    progrssBar: {
        backgroundColor: '#008000',
        // width: '40%',
        height: 4
    },
})