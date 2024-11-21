import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import Splashstyle from './Style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Icons from '../../shared/Strings/Icons';

const Splash = () => {
    const navigaion = useNavigation();
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='white' />

            <View style={Splashstyle.container}>
                <View style={Splashstyle.logo_container}>
                    <Image source={Icons.splashLogo} style={Splashstyle.logo_img} />
                </View>
                <View style={Splashstyle.login_box}>
                    <TouchableOpacity>
                        <Text style={Splashstyle.text}>New to Milan?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Splashstyle.login_btn}>
                        <AntDesign name="mail" size={20} color="black" />
                        <Text style={Splashstyle.login_btn_text}>Sign Up with Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Splashstyle.login_btn}>
                        <Feather name="smartphone" size={20} color="black" />
                        <Text style={Splashstyle.login_btn_text}>Sign Up with Mobile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Splashstyle.login_btn}>
                        <Image source={Icons.googleIcon} />
                        <Text style={Splashstyle.login_btn_text}>Sign Up with Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10, width: '100%', justifyContent: 'center', gap: 5 }}>
                    <Text style={Splashstyle.login_txt_1}>You don’t have account?</Text>
                    <TouchableOpacity onPress={() => navigaion.navigate('Login')}>
                        <Text style={Splashstyle.login_txt_2}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Splash;