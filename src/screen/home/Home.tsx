import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Home_Style from './Style'
import Entypo from 'react-native-vector-icons/Entypo';
import Icons from '../../shared/Strings/Icons'
import CustomHeader from '../../shared/Components/CustomHeader';
import CustomProfileHome from '../../shared/Components/CustomProfileHome';
import CustomProfileCard from '../../shared/Components/CustomProfileCard';
import profileInfo from '../../shared/Strings/dummy_Text/dummyProfileCard';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home() {
    return (
        <>
            <StatusBar backgroundColor='white' barStyle='dark-content' />
            <ScrollView>
                <CustomHeader headename='Home' icon={true} />
                <TouchableOpacity style={Home_Style.blueTickBox}>
                    <Image source={Icons.blueTickIcon} />
                    <Text style={Home_Style.bluetickText}>Standout with Verification. Get Blue Tick Now</Text>
                    <Entypo name="chevron-right" size={18} color="black" />
                </TouchableOpacity>

                {/* custom Profile Container */}
                <CustomProfileHome />

                {/* Custom Profile */}
                <CustomProfileCard profileinfothroughhome={profileInfo} />
                {/* Custom Profile */}
                <CustomProfileCard profileinfothroughhome={profileInfo} />


            </ScrollView>
        </>
    )
}