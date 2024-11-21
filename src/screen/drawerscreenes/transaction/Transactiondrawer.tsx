import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontfamily from '../../../shared/Strings/Font';
import Colors from '../../../shared/Strings/Colors';
import trabsactiondetail from '../../../shared/Strings/dummy_Text/trabsactiondetail';

export default function Transactiondrawer() {
    return (
        <ScrollView style={[StyleSheet.absoluteFillObject, styles.container]}>
            {
                trabsactiondetail.map((item, index) => (
                    <TouchableOpacity style={styles.transactionBox} key={index}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.imgBox}>
                                <Image source={item.img} style={styles.img} />
                            </View>
                            <View style={styles.textBox}>
                                <Text style={styles.name}>{item.name}</Text>
                                <View style={styles.date}>
                                    <EvilIcons name="calendar" size={25} color="black" />
                                    <Text style={styles.text}>{item.date || 'No date provided'}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.paidBox}>
                            <Text style={styles.paidtext}>Paid</Text>
                            <Text style={styles.transactionPrice}>Rs. {item.rupees}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 15
    },
    transactionBox: {
        width: '100%',
        height: 'auto',
        paddingHorizontal: 5,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        // backgroundColor:'red'
    },
    imgBox: {
        width: 70,
        height: 70,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    img: {
        resizeMode: 'center'
    },
    textBox: {
        marginLeft: 10
    },
    name: {
        fontFamily: Fontfamily.Urbanist400,
        fontSize: 18,
        color: Colors.text6
    },
    date: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    text: {
        fontFamily: Fontfamily.Urbanist400,
        fontSize: 12,
        color: Colors.text10,
    },
    paidBox: {
        height: '100%',
        alignItems: 'flex-end'
    },
    paidtext: {
        fontFamily: Fontfamily.Urbanist400,
        color: Colors.text6,
        fontSize: 12
    },
    transactionPrice: {
        color: Colors.text5,
        fontFamily: Fontfamily.Urbanist600
    }
})