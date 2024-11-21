import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomProgressBar from '../../../shared/Components/CustomProgressBar'
import CustomBackBtn from '../../../shared/Components/CustomBackBtn';
import { useNavigation } from '@react-navigation/native';
import DropdownComponent from '../../../shared/Components/DropdownComponent';
import CustomButton from '../../../shared/Components/CustomButton';
import CustomInput from '../../../shared/Components/CustomInput';
import Signup_profile_4Styles from './Style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from '../../../shared/Strings/Icons';

export default function Signup_profile_4() {

    const navigation = useNavigation()
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='white' />

            <View style={Signup_profile_4Styles.mainContainer}>
                <CustomProgressBar progressbarWidth='100%' />
                <View>
                    <CustomBackBtn backbtnfun={() => navigation.navigate('profile_3')} />
                </View>
                <View style={Signup_profile_4Styles.logContainer}>
                    <Image source={Icons.bagIcon} />
                    <Text style={Signup_profile_4Styles.logoText}>You are almost done!</Text>
                </View>
                <View style={Signup_profile_4Styles.dropdownContainer}>
                    <Text style={Signup_profile_4Styles.dropdownText}>Mobile No.</Text>
                    <View style={Signup_profile_4Styles.numberBox}>
                        <DropdownComponent placeholdername='+91' dropdownWidth='20%' />
                        <CustomInput inputname='Enter Mobile No.' inputborder='1' />
                    </View>

                    <Text style={Signup_profile_4Styles.dropdownText}>Annual Income</Text>
                    <DropdownComponent placeholdername='Your annual income' />
                    <View style={Signup_profile_4Styles.infoBox}>
                        <MaterialCommunityIcons name="information-outline" size={20} color="black" />
                        <Text style={Signup_profile_4Styles.infoText}>Why is income required</Text>
                    </View>
                    <Text style={Signup_profile_4Styles.dropdownText}>Work Details</Text>
                    <DropdownComponent placeholdername='You work with' />
                    <DropdownComponent placeholdername='You work as' />
                    <DropdownComponent placeholdername='Company Name' />
                </View>
                <View style={Signup_profile_4Styles.btn}>
                    <CustomButton name='Continue' width='90%' navigation={() => navigation.navigate('profile_5')} />
                </View>
            </View>
        </>

    )
}