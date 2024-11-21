import { View, Text, Touchable, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import Family_detail_Styles from './Style'
import CustomBackBtn from '../../../shared/Components/CustomBackBtn'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icons from '../../../shared/Strings/Icons';
import DropdownComponent from '../../../shared/Components/DropdownComponent';
import { useNavigation } from '@react-navigation/native';

export default function Family_Detail() {
    const navigation = useNavigation()
    return (
        <>
        <StatusBar barStyle='dark-content' backgroundColor='white' />
        <View style={Family_detail_Styles.mainContainer}>
            <View style={Family_detail_Styles.skipBtnBox}>
                <TouchableOpacity style={Family_detail_Styles.skipBtn} onPress={()=> navigation.navigate('Premium')}>
                    <Text style={Family_detail_Styles.skipBtnText}>Skip</Text>
                    <AntDesign name="right" size={15} color="black" />
                </TouchableOpacity>
            </View>
            <View style={Family_detail_Styles.midContainer}>
                <Image source={Icons.profileIcon2} />
                <View style={Family_detail_Styles.dropdownBox}>
                    <Text style={Family_detail_Styles.heading}>Add family details</Text>
                    <Text style={Family_detail_Styles.text}>This really helps find common connections</Text>

                    <View style={Family_detail_Styles.dropdown}>
                        <DropdownComponent placeholdername='Mother’s details' />
                        <DropdownComponent placeholdername='Father’s details' />
                        <DropdownComponent placeholdername='No. Of Sister' />
                        <DropdownComponent placeholdername='No. Of Brother' />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={Family_detail_Styles.skipBts} onPress={()=> navigation.navigate('Premium')}>
                <Text style={Family_detail_Styles.skipText}>Add Photos Later</Text>
                <AntDesign name='right' size={15} color='#292D32' />
            </TouchableOpacity>
        </View>
        </>
    )
}