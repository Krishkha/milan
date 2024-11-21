import { View, Text } from 'react-native'
import React from 'react'
import CustomPrimiumMatchesCard from '../../../shared/Components/CustomPrimiumMatchesCard'
import CustomsubTitle from '../components/CustomsubTitle'

export default function Morematch() {
    return (
        <View>
            <CustomsubTitle title='More' />

            {/* premium Cards */}
            <View style={{ width: '100%', paddingLeft: 13 }}>
                <CustomPrimiumMatchesCard />
            </View>
        </View>
    )
}