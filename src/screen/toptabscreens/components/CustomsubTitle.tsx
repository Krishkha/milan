import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../shared/Strings/Colors'
import Fontfamily from '../../../shared/Strings/Font'
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function CustomsubTitle({title}) {
    return (
        <View style={styles.container}>
            <View style={styles.subtitlebox}>
                <Text style={styles.subTitle}>{title}</Text>
                <TouchableOpacity>
                    <AntDesign name="filter" size={20} color={Colors.text8} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'auto'
    },
    subtitlebox:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: 10,
        marginTop:10
    },
    subTitle:{
        color: Colors.text3,
        fontFamily: Fontfamily.Urbanist400
    }
})