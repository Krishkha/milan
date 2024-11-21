import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/home/Home';
import Matches from '../screen/matches/Matches';
import Event from '../screen/event/Event';
import Chat from '../screen/chat/Chat';
import Premium from '../screen/Premiumes/Premium';
import Icons from '../shared/Strings/Icons';
import TopTabNavigaton from './TopTabNavigaton';
import Premium_screen from '../screen/premium/Premium_screen';
import ChatTopTabNavigation from './ChatTopTabNavigation';
import EventTopTabNavigation from './EventTopTabNavigation';


const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigation() {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#E461A3', tabBarInactiveTintColor: '#B1B1B1' }} initialRouteName='HomeDetail'>
            <BottomTab.Screen
                name="HomeDetail"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <Image
                            source={Icons.HomeTab}
                            style={{
                                tintColor: focused ? '#E461A3' : '#B1B1B1',
                                width: size,
                                height: size,
                            }}
                        />
                    ),
                    tabBarLabel: 'Home'
                }}
            />
            <BottomTab.Screen name="Matches" component={TopTabNavigaton} options={{
                tabBarIcon: ({ focused, size }) => (
                    <Image
                        source={Icons.userTab}
                        style={{
                            tintColor: focused ? '#E461A3' : '#B1B1B1',
                            width: 20,
                            height: 20,
                        }}
                    />
                ),
            }} />
            <BottomTab.Screen name="Event" component={EventTopTabNavigation} options={{
                tabBarIcon: ({ focused, size }) => (
                    <Image
                        source={Icons.emailTab}
                        style={{
                            tintColor: focused ? '#E461A3' : '#B1B1B1',
                            width: 20,
                            height: 20,
                        }}
                    />
                ),
            }} />
            <BottomTab.Screen name="Chat" component={ChatTopTabNavigation} options={{
                tabBarIcon: ({ focused, size }) => (
                    <Image
                        source={Icons.chatTab}
                        style={{
                            tintColor: focused ? '#E461A3' : '#B1B1B1',
                            width: 20,
                            height: 20,
                        }}
                    />
                ),
            }} />
            <BottomTab.Screen name="Premium" component={Premium_screen} options={{
                tabBarIcon: ({ focused, size }) => (
                    <Image
                        source={Icons.PremiumTab}
                        style={{
                            tintColor: focused ? '#E461A3' : '#B1B1B1',
                            width: 20,
                            height: 20,
                        }}
                    />
                ),
            }} />
        </BottomTab.Navigator>
    );
}
