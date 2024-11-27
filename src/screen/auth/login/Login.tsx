import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Touchable, StatusBar } from 'react-native';
import React, { useState } from 'react';
import Loginstyle from './Style';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../../shared/Components/CustomButton';
import CustomInput from '../../../shared/Components/CustomInput';
import CustomShowpassword from '../../../shared/Components/CustomShowpassword';
import Icons from '../../../shared/Strings/Icons';

const Login = () => {
    const navigation = useNavigation();

    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='transparent' />
            <View style={Loginstyle.main_container}>
                <ScrollView style={{ height: '100%' }}>
                    <StatusBar backgroundColor='white' barStyle='dark-content' />

                    <View style={Loginstyle.welcome_container}>
                        <Text style={Loginstyle.welcome_txt}>Welcome back</Text>
                        <Text style={Loginstyle.welcome_txt_2}>Login to your account</Text>
                        <TouchableOpacity style={Loginstyle.google_btn}>
                            <Image source={Icons.googleIcon} />
                            <Text style={Loginstyle.google_btn_txt}>Sign Up with Google</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Loginstyle.gap_box}>
                        <View style={Loginstyle.line}></View>
                        <Text style={{ color: '#B1B1B1', width: 20, fontFamily: 'Urbanist-Thin', fontWeight: '100' }}>OR</Text>
                        <View style={Loginstyle.line}></View>
                    </View>

                    <View style={Loginstyle.input_box}>
                        <CustomInput inputname='Mobile No./ Email ID' />

                        <CustomInput inputname='Password' />
                    </View>
                    <View style={Loginstyle.forgot_pass_box}>
                        <TouchableOpacity>
                            <Text style={Loginstyle.login_tuch_btn}>login with OTP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={Loginstyle.login_tuch_btn}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Login Button */}
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <CustomButton name="Login" width={200} navigation={() => navigation.navigate('Drawer')} />
                    </View>
                </ScrollView>
                <View style={Loginstyle.signupBox}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Signup')}>
                        <Text style={Loginstyle.signupText}>You don’t have account? </Text>
                        <Text style={Loginstyle.signupText_2}>Sign Up Free</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default Login;
