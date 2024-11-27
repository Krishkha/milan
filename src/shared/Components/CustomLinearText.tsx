import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fontfamily from '../Strings/Font'
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

export default function CustomLinearText({text}) {
    return (
            <MaskedView
                style={styles.maskedView}
                maskElement={<Text style={styles.maskedText}>{text}</Text>}
            >
                <LinearGradient
                    colors={['#E461A3', '#E44C59']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradient}
                />
            </MaskedView>
    )
}

const styles = StyleSheet.create({
    maskedView: {
        width: '37%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    maskedText: {
        fontSize: 16,
        fontFamily: Fontfamily.Urbanist700,
        color: 'black',
        height: '100%',
        marginTop: 10
    },
    gradient: {
        width: '100%',
        height: '100%',
    },
})