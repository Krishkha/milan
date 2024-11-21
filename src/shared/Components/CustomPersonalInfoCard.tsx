import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Strings/Colors'
import Fontfamily from '../Strings/Font'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const CustomPersonalInfoCard = ({ bgcolor, iconname, text1, text2, text3, icon }) => {
    return (
        <View style={styles.item}>
            <View style={[styles.iconBox, { backgroundColor: bgcolor }]}>
                {icon}
            </View>
            {
                text1 && text2 ? <View>
                    <Text style={styles.itemText}>{text1}</Text>
                    <Text style={styles.itemText2}>{text2}</Text>
                </View> : <Text style={styles.itemText2}>{text3}</Text>
            }
        </View>
    )
}

export default CustomPersonalInfoCard;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        gap: 10,
        alignItems:'center'
    },
    iconBox: {
        backgroundColor: Colors.bordercolor4,
        padding: 7,
        borderRadius: 55
    },
    itemText: {
        color: Colors.text1,
        fontFamily: Fontfamily.Urbanist400,
        fontSize: 14
    },
    itemText2: {
        color: Colors.text6,
        fontFamily: Fontfamily.Urbanist500,
        fontSize: 15
    },
})