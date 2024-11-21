import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screen/splash';
import Login from '../screen/auth/login/Login';
import Signup from '../screen/auth/signup/Signup';
import Signup_profile_2 from '../screen/auth/signup_profile_2/Signup_profile_2';
import Signup_profile_3 from '../screen/auth/signup_profile_3/Signup_profile_3';
import Signup_profile_4 from '../screen/auth/signup_profile_4/Signup_profile_4';
import Signup_profile_pick from '../screen/auth/signup_profile_pick/Signup_profile_pick';
import Family_Detail from '../screen/auth/familyDetail/Family_Detail';
import Premium_screen from '../screen/premium/Premium_screen';
import DrawerNavigation from './DrawerNavigation';
import BottomTabNavigation from './BottomTabNavigation';
import Primium_match from '../screen/auth/Premium_match/Primium_match';
import Connect_profile from '../screen/connect_profile/Connect_profile';
import Searchmatch from '../screen/toptabscreens/search/Searchmatch';
import Blogdrawer from '../screen/drawerscreenes/blog/Blogdrawer';
import Helpdrawer from '../screen/drawerscreenes/help/Helpdrawer';
import PrivacySettingdrawer from '../screen/drawerscreenes/privacysetting/PrivacySettingdrawer';
import Questiondrawer from '../screen/drawerscreenes/question/Questiondrawer';
import TermConditiondrawer from '../screen/drawerscreenes/termcondition/TermConditiondrawer';
import Transactiondrawer from '../screen/drawerscreenes/transaction/Transactiondrawer';
import Notificationdrawer from '../screen/drawerscreenes/notification/Notificationdrawer';
import Fontfamily from '../shared/Strings/Font';
import Colors from '../shared/Strings/Colors';
import Chatbox from '../screen/chattopbarscreens/active/Chatbox';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="profile_2" component={Signup_profile_2} options={{ headerShown: false }} />
                <Stack.Screen name="profile_3" component={Signup_profile_3} options={{ headerShown: false }} />
                <Stack.Screen name="profile_4" component={Signup_profile_4} options={{ headerShown: false }} />
                <Stack.Screen name="profile_5" component={Signup_profile_pick} options={{ headerShown: false }} />
                <Stack.Screen name="Family_detail" component={Family_Detail} options={{ headerShown: false }} />
                <Stack.Screen name="Premium" component={Premium_screen} options={{ headerShown: false }} />
                <Stack.Screen name="Drawer" component={DrawerNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={BottomTabNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="Primium_match" component={Primium_match} options={{ headerShown: false }} />
                <Stack.Screen name="Connect_profile" component={Connect_profile} options={{ headerShown: false }} />
                <Stack.Screen name="Searchmatch" component={Searchmatch} options={{ headerShown: false }} />
                <Stack.Screen name="ChatBox" component={Chatbox} options={{ headerShown: false }} />
                <Stack.Screen 
                    name="Blog" 
                    component={Blogdrawer} 
                    options={{
                        headerShown: true, 
                        headerTitleAlign: 'center',
                        headerTitleStyle: { 
                            color: Colors.text3,
                            fontFamily: Fontfamily.Urbanist600,
                            fontSize: 18,
                        },
                        headerStyle: {
                            elevation: 0,
                        },
                    }} 
                />
                <Stack.Screen 
                    name="Help" 
                    component={Helpdrawer} 
                    options={{
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerTitleStyle: { 
                            color: Colors.text3,
                            fontFamily: Fontfamily.Urbanist600,
                            fontSize: 18,
                        },
                    }} 
                />
                <Stack.Screen 
                    name="Privacy Setting" 
                    component={PrivacySettingdrawer} 
                    options={{
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerTitleStyle: { 
                            color: Colors.text3,
                            fontFamily: Fontfamily.Urbanist600,
                            fontSize: 18,
                        },
                    }} 
                />
                <Stack.Screen 
                    name="FAQs" 
                    component={Questiondrawer} 
                    options={{
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerTitleStyle: { 
                            color: Colors.text3,
                            fontFamily: Fontfamily.Urbanist600,
                            fontSize: 18,
                        },
                    }} 
                />
                <Stack.Screen  
                    name="Notification" 
                    component={Notificationdrawer} 
                    options={{
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerTitleStyle: { 
                            color: Colors.text3,
                            fontFamily: Fontfamily.Urbanist600,
                            fontSize: 18,
                        },
                    }} 
                />
                <Stack.Screen 
                    name="Terms & Conditions" 
                    component={TermConditiondrawer} 
                    options={{
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerTitleStyle: { 
                            color: Colors.text3,
                            fontFamily: Fontfamily.Urbanist600,
                            fontSize: 18,
                        },
                    }} 
                />
                <Stack.Screen 
                    name="Transaction" 
                    component={Transactiondrawer} 
                    options={{
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerTitleStyle: { 
                            color: Colors.text3,
                            fontFamily: Fontfamily.Urbanist600,
                            fontSize: 18,
                        },
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
