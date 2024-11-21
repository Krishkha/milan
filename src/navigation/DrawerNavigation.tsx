import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icons from '../shared/Strings/Icons';
import BottomTabNavigation from './BottomTabNavigation';
import TopTabnavigation from './TopTabnavigation';
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomDrawerContent from '../shared/Components/CustomDrawerContent';
import Colors from '../shared/Strings/Colors';


const Drawer = createDrawerNavigator();

function DrawerCloseButton() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.closeDrawer()} // Close the drawer
            style={{ padding: 10 }}
        >
            <AntDesign name='close' color='black' size={20} />
        </TouchableOpacity>
    );
}

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} initialRouteName="Home" screenOptions={{
            headerShown: false, drawerStyle: {
                backgroundColor: '#E3E3E3',
                width: '100%',
            },
        }} >
            <Drawer.Screen
                name="Home"
                component={BottomTabNavigation}
                options={{
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => alert('Notification Bell Pressed!')}
                            style={{ marginRight: 15 }}
                        >
                            <Image
                                source={Icons.notificationBell}
                                style={{ width: 30, height: 30 }}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Drawer.Screen
                name="Edit Profile"
                component={BottomTabNavigation}
                options={{
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => alert('Notification Bell Pressed!')}
                            style={{ marginRight: 15 }}
                        >
                            <Image
                                source={Icons.notificationBell}
                                style={{ width: 20, height: 20 }}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}
