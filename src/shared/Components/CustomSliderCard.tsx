import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontfamily from '../Strings/Font';

export default function CustomSliderCard({ item, index }) {
    return (
        <View style={styles.container} key={index}>
            <View style={styles.category}>
                <Text style={styles.categoryHead}>{item.category}</Text>
                <Text style={styles.categoryText}>{item.planTime}</Text>
            </View>
            <View style={styles.priceBox}>
                <View style={styles.offerBox}>
                    <Text style={styles.offText}>{item.offer} off</Text>
                    <Text style={[styles.offText, styles.wrongText]}>${item.checkPrice}</Text>
                </View>
                <Text style={styles.price}>${item.Price}</Text>
                <Text style={styles.pricePerMonth}>${item.priceperMonth} per month</Text>
            </View>
            {item.offerinfo.map((info) => (
                <View key={info.id} style={styles.offerInfoBox}>
                    <FontAwesome6
                        name={info.xIcon ? 'xmark' : 'check'}
                        size={18}
                        color={info.xIcon ? 'red' : 'green'}
                    />
                    <Text
                        style={[
                            styles.offerInfoText,
                            info.xIcon && styles.strikethroughText,
                        ]}
                    >
                        {info.text}
                    </Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'80%', // Full width with a slight margin
        height: 350,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        alignSelf: 'center'
    },
    category: {
        flexDirection: 'row',
        gap: 5
    },
    categoryHead: {
        color: 'black',
        fontFamily: Fontfamily.Inter700,
        fontSize: 16,
        fontWeight: '800',
    },
    categoryText: {
        color: '#B1B1B1',
        fontFamily: Fontfamily.Inter400,
        textDecorationLine: 'line-through',
    },
    offerBox: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 5,
    },
    offText: {
        color: '#00C200',
        fontFamily: Fontfamily.Inter400,
    },
    wrongText: {
        color: 'black',
        textDecorationLine: 'line-through',
    },
    priceBox: {
        alignItems: 'center',
        marginVertical: 10, // Add spacing around price box
    },
    price: {
        color: '#656565',
        fontFamily: Fontfamily.Inter700,
        fontSize: 30,
    },
    pricePerMonth: {
        color: '#B1B1B1',
        fontFamily: Fontfamily.Inter400,
        fontSize: 12,
        textAlign: 'center',
    },
    offerInfoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5, // Replace gap with consistent margin
    },
    offerInfoText: {
        color: '#000000',
        fontFamily: Fontfamily.Inter400,
    },
    strikethroughText: {
        textDecorationLine: 'line-through',
        color: 'black',
    },
});
