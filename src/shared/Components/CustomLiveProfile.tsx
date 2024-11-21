import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons';

export default function CustomLiveProfile({ img }) {
    return (
        <View style={styles.imgbox}>
            <Image style={styles.img} source={img} />
            <View style={styles.icon}>
                <Octicons
                    name="dot-fill"
                    size={15}
                    color='#4CD964'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imgbox: {
        height: 50,
        width: 50,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 60,
    },
    icon: {
        position: 'absolute',
        top: 30,
        right: 6,
    },
})