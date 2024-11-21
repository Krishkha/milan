import { View, Text, TouchableOpacity, Image,StatusBar } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomProgressBar from '../../../shared/Components/CustomProgressBar'
// import Signup_profile_3Styles from './Style';
import CustomBackBtn from '../../../shared/Components/CustomBackBtn';
import { useNavigation } from '@react-navigation/native';
import DropdownComponent from '../../../shared/Components/DropdownComponent';
import CustomButton from '../../../shared/Components/CustomButton';
import Signup_profile_3Styles from './Style';
import Icons from '../../../shared/Strings/Icons';

export default function Signup_profile_3() {

    const navigation = useNavigation()
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='white' />

            <View style={Signup_profile_3Styles.mainContainer}>
                <CustomProgressBar progressbarWidth='80%' />
                <View>
                    <CustomBackBtn backbtnfun={() => navigation.navigate('profile_2')} />
                </View>
                <View style={Signup_profile_3Styles.logContainer}>
                    <Image source={Icons.educationIcon} />
                    <Text style={Signup_profile_3Styles.logoText}>great! Few more details</Text>
                </View>
                <View style={Signup_profile_3Styles.dropdownContainer}>
                    <Text style={Signup_profile_3Styles.dropdownText}>Highest qualification</Text>
                    <DropdownComponent placeholdername='Your highest qualification' />

                    <Text style={Signup_profile_3Styles.dropdownText}>College</Text>
                    <DropdownComponent placeholdername='Collage you attended' />
                    <DropdownComponent placeholdername='Another college name' />
                </View>
                <View style={Signup_profile_3Styles.btn}>
                    <CustomButton name='Continue' width='90%' navigation={() => navigation.navigate('profile_4')} />
                </View>
            </View>
        </>

    )
}