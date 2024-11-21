import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Colors from '../../../shared/Strings/Colors';
import Fontfamily from '../../../shared/Strings/Font';
import { Switch } from 'react-native-switch';
import CustomSwitchBtn from '../../../shared/Components/CustomSwitchBtn';

// You can create a simple custom component for the switch's circle if needed.
const CustomComponent = () => {
    return (
        <View style={{ width: 10, height: 10, backgroundColor: 'white', borderRadius: 10 }} />
    );
}

export default function PrivacySettingdrawer() {

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = (value) => {
        setIsEnabled(value);
        console.log('Switch value:', value); // You can log the value or perform other actions here.
    };

    return (
        <View style={{ gap: 20 }}>
            <View style={styles.container}>
                <Text style={styles.heading}>App Manager</Text>

                <TouchableOpacity style={styles.tuchbtn}>
                    <Text style={styles.btntext}>Permission Manager</Text>
                    <EvilIcons name="chevron-right" size={30} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <Text style={styles.heading}>Privacy Protection</Text>

                <TouchableOpacity style={styles.tuchbtn}>
                    <Text style={styles.btntext}>Permission Manager</Text>
                    <EvilIcons name="chevron-right" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tuchbtn}>
                    <Text style={styles.btntext}>Private Safe</Text>
                    <EvilIcons name="chevron-right" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tuchbtn}>
                    <Text style={styles.btntext}>System Cloner</Text>
                    <EvilIcons name="chevron-right" size={30} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <Text style={styles.heading}>Privacy</Text>

                <TouchableOpacity style={styles.tuchbtn}>
                    <Text style={styles.btntext}>ID & Ads</Text>
                    <EvilIcons name="chevron-right" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tuchbtn}>
                    <Text style={styles.btntext}>Show Profile</Text>
                    <CustomSwitchBtn />
                </TouchableOpacity>

                <TouchableOpacity style={styles.tuchbtn}>
                    <Text style={styles.btntext}>Notification on Lock screen</Text>
                    <CustomSwitchBtn />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 20,
        paddingHorizontal: 10,
        gap: 10
    },
    heading: {
        color: Colors.text12,
        fontFamily: Fontfamily.Urbanist400,
        fontSize: 12,
    },
    tuchbtn: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btntext: {
        color: Colors.text11,
        fontFamily: Fontfamily.Urbanist500
    }
})
