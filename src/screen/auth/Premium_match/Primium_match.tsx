import { View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Primium_match_Style from './Style'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import CustomPrimiumMatchesCard from '../../../shared/Components/CustomPrimiumMatchesCard';
import Premium_match_data from '../../../shared/Strings/dummy_Text/premium_match';

export default function Primium_match() {
    const navigation = useNavigation();
    return (
        <>
            <View style={{marginBottom:140}}>
                <StatusBar backgroundColor='white' barStyle='dark-content' />
                <View style={Primium_match_Style.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={25} color="black" />
                    </TouchableOpacity>
                    <Text style={Primium_match_Style.heading}>Premium Matches ({Premium_match_data.length})</Text>
                </View>
                <View style={Primium_match_Style.mainContainer}>
                    <View style={Primium_match_Style.subHeading}>
                        <Text style={Primium_match_Style.text}>Recently upgraded Premium Members</Text>
                        <TouchableOpacity>
                            <AntDesign name="filter" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={Primium_match_Style.cardContainer}>
                        <CustomPrimiumMatchesCard />
                    </View>
                </View>
            </View>
        </>
    )
}