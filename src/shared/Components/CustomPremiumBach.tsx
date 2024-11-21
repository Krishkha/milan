import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontfamily from '../Strings/Font';
import Colors from '../Strings/Colors';


export default function CustomPremiumBach() {
    return (
        <LinearGradient colors={['#E461A3', '#E44C59']} style={styles.preminumBach}>
            <MaterialCommunityIcons name="crown" size={15} color="white" />
            <Text style={styles.text}>PREMIUM</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    preminumBach: {
        flexDirection: 'row',
        gap: 5,
        borderRadius: 50,
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    text:{
        fontFamily: Fontfamily.Urbanist400,
        fontSize: 12,
        color: Colors.text2
    }
})