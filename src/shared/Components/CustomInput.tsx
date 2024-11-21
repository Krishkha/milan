import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Fontfamily from '../Strings/Font'
import Colors from '../Strings/Colors'

export default function CustomInput({inputname,inputborder}) {
    return (
        <TextInput
            placeholder={inputname}
            placeholderTextColor="black"
            style={styles.input}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        width: '90%',
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E3E3E3',
        fontFamily: Fontfamily.Urbanist400,
        color: Colors.text10,
        fontSize: 15,
    },
})
