import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screen/splash';
import Login from '../screen/auth/login/Login';
import Signup from '../screen/auth/signup/Signup';
// import signup_profile_2 from '../screen/auth/signup_profile/Signup_profile_2';
import Signup_profile_2 from '../screen/auth/signup_profile_2/Signup_profile_2';
import Signup_profile_3 from '../screen/auth/signup_profile_3/Signup_profile_3';
import Signup_profile_4 from '../screen/auth/signup_profile_4/Signup_profile_4';
import Signup_profile_pick from '../screen/auth/signup_profile_pick/Signup_profile_pick';
import Family_Detail from '../screen/auth/familyDetail/Family_Detail';
import Premium_screen from '../screen/premium/Premium_screen';
import Home from '../screen/home/Home';
import DrawerNavigation from './DrawerNavigation';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="profile_2" component={Signup_profile_2} options={{headerShown:false}} />
                <Stack.Screen name="profile_3" component={Signup_profile_3} options={{headerShown:false}} />
                <Stack.Screen name="profile_4" component={Signup_profile_4} options={{headerShown:false}} />
                <Stack.Screen name="profile_5" component={Signup_profile_pick} options={{headerShown:false}} />
                <Stack.Screen name="Family_detail" component={Family_Detail} options={{headerShown:false}} />
                <Stack.Screen name="Premium" component={Premium_screen} options={{headerShown:false}} />
                <Stack.Screen name="Drawer" component={DrawerNavigation} options={{headerShown:false}} />
                <Stack.Screen name="Bottom_Tab" component={BottomTabNavigation} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
