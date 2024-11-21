import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Premium_Styles from './Style';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomSliderBar from '../../shared/Components/CustomSliderBar';
import CustomButton from '../../shared/Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default function Premium_screen() {
    const navigation = useNavigation()
    return (
        <>
            {/* Uncomment the StatusBar for proper UI */}
            {/* <StatusBar translucent backgroundColor="darkpink" barStyle="light-content" /> */}
            <View style={Premium_Styles.mainContainer}>
                <LinearGradient
                    colors={['#E461A3', '#E44C59']}
                    style={Premium_Styles.gradientBox}
                >
                    <Text style={Premium_Styles.text}>Upgrade to Premium</Text>
                    <TouchableOpacity style={Premium_Styles.skipBtn} onPress={() => navigation.navigate('Drawer')}>
                        <Text style={Premium_Styles.skipbtnText}>Skip</Text>
                        <Entypo name="chevron-small-right" size={25} color="#E3E3E3" />
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                    colors={['#E461A3', '#E44C59', '#FFFFFF']}
                    style={Premium_Styles.gradientBox2}
                >
                    <View style={Premium_Styles.validBox}>
                        <Text style={Premium_Styles.validBoxHead}>Offer vaild till 22nd October</Text>
                    </View>
                    <View style={Premium_Styles.validBox}>
                        <CustomSliderBar />
                    </View>
                </LinearGradient>
                <View style={Premium_Styles.buyplanbtn}>
                    <CustomButton name='Buy Plan' width='70%' />
                </View>
            </View>
        </>
    );
}
