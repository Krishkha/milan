import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../Strings/Colors'
import CustomInput from './CustomInput'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler'
import Fontfamily from '../Strings/Font'

export default function SearchBox({ searchwidth }) {
    return (
        <View style={[styles.searchBox, { width: searchwidth }]}>
            <Feather name='search' color={Colors.text10} size={30} />
            <TextInput placeholder='Search be keywords' placeholderTextColor={Colors.text10} style={styles.input} />

            <TouchableOpacity>
                <Ionicons name='options-outline' color={Colors.text10} size={30} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        backgroundColor: Colors.backgrcound1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        paddingHorizontal: 10
    },
    input: {
        backgroundColor: Colors.backgrcound1,
        width: '80%',
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E3E3E3',
        fontFamily: Fontfamily.Urbanist400,
        color: Colors.text10,
        fontSize: 15,
    },
})