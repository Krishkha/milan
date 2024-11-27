import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Signup_profile_pickStyle from './Style'
import CustomBackBtn from '../../../shared/Components/CustomBackBtn'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../../shared/Components/CustomButton'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ProfileImage } from '../../../shared/Components/CustomProfileHome'

export default function Signup_profile_pick() {
    const navigation = useNavigation()
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='white' />

            <View style={Signup_profile_pickStyle.maincontainer}>
                <CustomBackBtn backbtnfun={() => navigation.navigate('profile_4')} />

                <View style={Signup_profile_pickStyle.pickBox}>
                    <TouchableOpacity>
                        <ProfileImage img={false} />
                    </TouchableOpacity>
                    <Text style={Signup_profile_pickStyle.profileImgHead}>Add Photos</Text>
                    <Text style={Signup_profile_pickStyle.profileImgHead}>to complete your Profile</Text>
                    <Text style={Signup_profile_pickStyle.profileImgText}>Photo Privacy controls available in Settings</Text>
                </View>
                <View style={Signup_profile_pickStyle.pickerBtns}>
                    <CustomButton name='Add From Gallery' width='60%' />
                    <TouchableOpacity style={Signup_profile_pickStyle.camera}>

                        <Feather name="camera" size={20} color='#E44C59' />
                        <Text style={Signup_profile_pickStyle.camaraText}>Use Camera</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={Signup_profile_pickStyle.skipBts} onPress={() => navigation.navigate('Family_detail')}>
                    <Text style={Signup_profile_pickStyle.skipText}>Add Photos Later</Text>
                    <AntDesign name='right' size={15} color='#292D32' />
                </TouchableOpacity>
            </View>
        </>

    )
}
