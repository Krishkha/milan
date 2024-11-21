import { View, Text } from 'react-native'
import React from 'react'
import CustomsubTitle from '../components/CustomsubTitle'
import CustomPrimiumMatchesCard from '../../../shared/Components/CustomPrimiumMatchesCard'

export default function Newprofilematch() {
    return (
        <View>
            <CustomsubTitle title='Members who joined Recently' />

            <View style={{width:'100%',paddingLeft:13}}>
                <CustomPrimiumMatchesCard  />
            </View>
        </View>
    )
}