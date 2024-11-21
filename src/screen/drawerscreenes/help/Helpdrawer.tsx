import { View, Text } from 'react-native'
import React from 'react'
import CustomChatbox from '../../../shared/Components/CustomChatbox'
import Colors from '../../../shared/Strings/Colors'

export default function Helpdrawer() {
    return (
        <View style={{width:'100%',height:'100%',backgroundColor: '#F9F7F2'}}>
            <CustomChatbox fistChat='Can I help You?' />
        </View>
    )
}