import { View, Text, Image, ScrollView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import CustomProgressBar from '../../../shared/Components/CustomProgressBar';
import Signup_profile_3Styles from './Style';
import CustomBackBtn from '../../../shared/Components/CustomBackBtn';
import { useNavigation } from '@react-navigation/native';
import DropdownComponent from '../../../shared/Components/DropdownComponent';
import CustomButton from '../../../shared/Components/CustomButton';
import Icons from '../../../shared/Strings/Icons';
import { CollegeAttended, HighestQualification } from '../../../shared/Strings/DropdownItems';

export default function Signup_profile_3() {
    const navigation = useNavigation();

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />

            <View style={Signup_profile_3Styles.mainContainer}>
                <CustomProgressBar progressbarWidth="80%" />
                <View>
                    <CustomBackBtn backbtnfun={() => navigation.navigate('profile_2')} />
                </View>

                <ScrollView contentContainerStyle={StyleSheet.absoluteFillObject}>
                    <View style={Signup_profile_3Styles.logContainer}>
                        <Image source={Icons.educationIcon} />
                        <Text style={Signup_profile_3Styles.logoText}>Great! Few more details</Text>
                    </View>
                    <View style={Signup_profile_3Styles.dropdownContainer}>
                        <Text style={Signup_profile_3Styles.dropdownText}>Highest qualification</Text>
                        <DropdownComponent placeholdername="Your highest qualification" data={HighestQualification} />

                        <Text style={Signup_profile_3Styles.dropdownText}>College</Text>
                        <DropdownComponent placeholdername="College you attended" data={CollegeAttended} />
                        <DropdownComponent placeholdername="Another college name" data={CollegeAttended} />
                    </View>
                    <View style={Signup_profile_3Styles.btn}>
                        <CustomButton name="Continue" width="90%" navigation={() => navigation.navigate('profile_4')} />
                    </View>
                </ScrollView>
            </View>
        </>
    );
}
