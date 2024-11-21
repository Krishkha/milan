import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Resent from '../screen/chattopbarscreens/resent/Resent';
import Active from '../screen/chattopbarscreens/active/Active';
import Calls from '../screen/chattopbarscreens/calls/Calls';
import Fontfamily from '../shared/Strings/Font';
import Colors from '../shared/Strings/Colors';

const Tab = createMaterialTopTabNavigator();

export default function ChatTopTabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: Colors.backgrcound1,
                    height: 50,
                    elevation: 0,
                    shadowOpacity: 0,
                },
                tabBarIndicatorStyle: {
                    height: 0,
                },
                tabBarPressColor: false
            }}
        >
            <Tab.Screen name="Recent" component={Resent} options={{
                tabBarLabel: ({ focused }) => (
                    <LinearGradient
                        colors={focused ? ['#E461A3', '#E44C59'] : ['#FFFFFF', '#FFFFFF']}
                        style={focused ? styles.gradient : styles.inactivegradient}
                    >
                        <Text style={focused ? styles.activeTabText : styles.inactiveTabText}>
                            Resent
                        </Text>
                    </LinearGradient>
                ),
            }} />
            <Tab.Screen name="Active" component={Active} options={{
                tabBarLabel: ({ focused }) => (
                    <LinearGradient
                        colors={focused ? ['#E461A3', '#E44C59'] : ['#FFFFFF', '#FFFFFF']}
                        style={focused ? styles.gradient : styles.inactivegradient}
                    >
                        <Text style={focused ? styles.activeTabText : styles.inactiveTabText}>
                            Active
                        </Text>
                    </LinearGradient>
                ),
            }} />
            <Tab.Screen name="Calls" component={Calls} options={{
                tabBarLabel: ({ focused }) => (
                    <LinearGradient
                        colors={focused ? ['#E461A3', '#E44C59'] : ['#FFFFFF', '#FFFFFF']}
                        style={focused ? styles.gradient : styles.inactivegradient}
                    >
                        <Text style={focused ? styles.activeTabText : styles.inactiveTabText}>
                            Calls
                        </Text>
                    </LinearGradient>
                ),
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 20,
        borderRadius: 5
    },
    inactivegradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 20,
        borderWidth: 0.5,
        borderRadius: 5
    },
    activeTabText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 12,
        fontFamily: Fontfamily.Urbanist400
    },
    inactiveTabText: {
        fontSize: 14,
        fontWeight: 'normal',
        color: 'gray',
    },
});
