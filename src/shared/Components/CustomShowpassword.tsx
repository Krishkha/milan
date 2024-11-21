import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomShowpassword({setPassword,showPassword}) {
    return (
        <View style={styles.passwordContainer}>
            <TextInput
                placeholder="Password"
                placeholderTextColor="black"
                style={styles.input}
                secureTextEntry={!showPassword}
                onChangeText={setPassword}
                value={password}
            />
            <TouchableOpacity
                style={styles.showButton}
                onPress={() => setShowPassword(!showPassword)}
            >
                <Text style={styles.showButtonText}>
                    {showPassword ? 'Hide' : 'Show'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        width: '90%',
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E3E3E3',
        fontFamily: 'Urbanist-Regular',
        color: 'black',
        fontSize: 15
    },
    passwordContainer: {
        flexDirection: 'row'
    },
    showButton: {
        position: 'absolute',
        right: 10,
        top: '30%',
    },
    showButtonText: {
        color: '#B1B1B1',
        fontFamily: 'Urbanist-Regular',
    },
})