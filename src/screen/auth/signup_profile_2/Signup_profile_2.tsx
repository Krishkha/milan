import { View, Text, Image, ScrollView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import CustomProgressBar from '../../../shared/Components/CustomProgressBar';
import Signup_profile_2Styles from './Style';
import CustomBackBtn from '../../../shared/Components/CustomBackBtn';
import { useNavigation } from '@react-navigation/native';
import DropdownComponent from '../../../shared/Components/DropdownComponent';
import CustomButton from '../../../shared/Components/CustomButton';
import Icons from '../../../shared/Strings/Icons';
import { Diet, Height, MaritalStatus } from '../../../shared/Strings/DropdownItems';

export default function Signup_profile_2() {
    const navigation = useNavigation();

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View style={Signup_profile_2Styles.mainContainer}>
                <CustomProgressBar progressbarWidth="60%" />
                <View>
                    <CustomBackBtn backbtnfun={() => navigation.navigate('Signup')} />
                </View>

                <ScrollView contentContainerStyle={[StyleSheet.absoluteFillObject,{justifyContent:'center'}]}>
                    <View style={Signup_profile_2Styles.logContainer}>
                        <Image source={Icons.profileIcon} />
                        <Text style={Signup_profile_2Styles.logoText}>Now let’s build your Profile</Text>
                    </View>
                    <View style={Signup_profile_2Styles.dropdownContainer}>
                        <Text style={Signup_profile_2Styles.dropdownText}>Marital status</Text>
                        <DropdownComponent placeholdername="Your Marital status" data={MaritalStatus} />

                        <Text style={Signup_profile_2Styles.dropdownText}>Height</Text>
                        <DropdownComponent placeholdername="Your height" data={Height} />

                        <Text style={Signup_profile_2Styles.dropdownText}>Diet</Text>
                        <DropdownComponent placeholdername="Your Diet" data={Diet} />
                    </View>
                </ScrollView>
                <View style={Signup_profile_2Styles.btn}>
                    <CustomButton name="Continue" width="90%" navigation={() => navigation.navigate('profile_3')} />
                </View>
            </View>
        </>
    );
}
