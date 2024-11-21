import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigation from './src/navigation/StackNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainNavigation from './src/navigation/MainNavigation';
import { useLocale } from '@react-navigation/native';


const App = () => {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <MainNavigation />
      </GestureHandlerRootView>
    </View>
  )
}

export default App;

// const styles = StyleSheet.create({})