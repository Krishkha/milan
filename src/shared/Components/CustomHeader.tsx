import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Fontfamily from '../Strings/Font';
import Icons from '../Strings/Icons';

export default function CustomHeader({ headename, icon }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.iconBox}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Octicons name="three-bars" size={20} color="black" />

                </TouchableOpacity>
                <Text style={styles.HeaderText}>{headename}</Text>
            </View>

            <TouchableOpacity onPress={()=> navigation.navigate('Notification')}>
                {
                    icon == true ? <Image source={Icons.notifyIcon} style={styles.img} /> : null
                }
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 13,
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    HeaderText: {
        color: '#656565',
        fontFamily: Fontfamily.Urbanist600,
        fontSize: 20
    },
    iconBox: {
        flexDirection: 'row',
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 25,
        height: 25
    }
})