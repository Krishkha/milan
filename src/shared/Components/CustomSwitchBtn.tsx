import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Switch } from 'react-native-switch'

export default function CustomSwitchBtn() {
    const [value, setValue] = useState(false)
    return (
        <Switch
        value={value}
        onValueChange={()=> setValue(!value)}
        renderActiveText={false}
        renderInActiveText={false}
        barHeight={23}
        circleSize={13}
        circleBorderWidth={2}
        circleBorderActiveColor={0}
        switchBorderRadius={77}
        switchWidthMultiplier={2.5}
        backgroundActive='#E461A3'
        backgroundInactive='transparent'
        containerStyle={value == true ? {borderWidth:0} : {borderWidth:1}}
        />
    )
}

const styles = StyleSheet.create({})