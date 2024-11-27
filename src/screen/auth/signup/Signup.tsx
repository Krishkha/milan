import { View, Text, Image, ScrollView, StatusBar, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Signupstyle from './Style';
import CustomButton from '../../../shared/Components/CustomButton';
import DropdownComponent from '../../../shared/Components/DropdownComponent';
import CheckBox from 'react-native-check-box';
import { useNavigation } from '@react-navigation/native';
import CustomProgressBar from '../../../shared/Components/CustomProgressBar';
import Icons from '../../../shared/Strings/Icons';
import { Cities, Communities, Stats } from '../../../shared/Strings/DropdownItems';

const Signup = () => {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View style={Signupstyle.mainContainer}>
                <CustomProgressBar progressbarWidth="40%" />

                <ScrollView
                    contentContainerStyle={[StyleSheet.absoluteFill,{justifyContent:'center'}]}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={Signupstyle.midContainer}>
                        <View style={Signupstyle.logoBox}>
                            <Image source={Icons.locationIcon} />
                            <Text style={Signupstyle.text}>Now let’s build your Profile</Text>
                        </View>
                        <View style={Signupstyle.dropdownBox}>
                            <Text style={Signupstyle.dropdownLabel}>State</Text>
                            <DropdownComponent placeholdername="State you live in" data={Stats} />
                            <Text style={Signupstyle.dropdownLabel}>City</Text>
                            <DropdownComponent placeholdername="City you live in" data={Cities} />
                            <Text style={Signupstyle.dropdownLabel}>Sub-community</Text>
                            <DropdownComponent placeholdername="Your Sub - community" data={Communities} />
                        </View>
                        <View style={Signupstyle.checkbox}>
                            <CheckBox
                                style={{ flex: 1, padding: 10 }}
                                isChecked={isChecked}
                                onClick={() => setIsChecked(!isChecked)}
                            />
                            <Text style={Signupstyle.checkboxText}>
                                Not particular about my partner’s community (Caste no bar)
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={Signupstyle.btn}>
                    <CustomButton
                        name="Continue"
                        width="90%"
                        navigation={() => navigation.navigate('profile_2')}
                    />
                </View>
            </View>
        </>
    );
};

export default Signup;
