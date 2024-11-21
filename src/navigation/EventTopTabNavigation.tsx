import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Received from '../screen/eventtoptab/received/Received';
import Accepted from '../screen/eventtoptab/accepted/Accepted';
import Contact from '../screen/eventtoptab/contact/Contact';
import Send from '../screen/eventtoptab/send/Send';
import More from '../screen/eventtoptab/more/More';

const Tab = createMaterialTopTabNavigator();

export default function EventTopTabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#000000', // Active tab text color
                tabBarInactiveTintColor: '#B1B1B1', // Inactive tab text color
                tabBarLabelStyle: {
                    fontFamily: 'Urbanist-Medium',
                    fontSize: 14,
                    textAlign: 'center',
                },
                tabBarItemStyle: {
                    width: 'auto', // Make the tab size adjust to the text
                    paddingHorizontal: 10, // Add some padding around the text
                },
                tabBarStyle: {
                    backgroundColor: '#FFFFFF', // Background color of the tab bar

                },
                tabBarScrollEnabled: true, // Enable scrolling if tabs don't fit the screen
                tabBarIndicatorStyle: {
                    backgroundColor: '#000000', // Black indicator line for active tab
                    height: 3, // Adjust the height of the indicator line
                },
            }}
        >
            <Tab.Screen
                name="Received"
                component={Received}
                options={{ tabBarLabel: 'Received' }}
            />
            <Tab.Screen
                name="Accepted"
                component={Accepted}
                options={{ tabBarLabel: 'Accepted' }}
            />
            <Tab.Screen
                name="Contact"
                component={Contact}
                options={{ tabBarLabel: 'Contact' }}
            />
            <Tab.Screen
                name="Send"
                component={Send}
                options={{ tabBarLabel: 'Send' }}
            />
            <Tab.Screen
                name="More"
                component={More}
                options={{ tabBarLabel: 'More' }}
            />
        </Tab.Navigator>
    );
}
