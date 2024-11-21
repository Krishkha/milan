import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Searchmatch from '../screen/toptabscreens/search/Searchmatch';
import Newprofilematch from '../screen/toptabscreens/newprofile/Newprofilematch';
import Dailymatch from '../screen/toptabscreens/daily/Dailymatch';
import Mymatch from '../screen/toptabscreens/mymatch/Mymatch';
import Nearme from '../screen/toptabscreens/nearme/Nearme';
import Morematch from '../screen/toptabscreens/morematch/Morematch';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigaton() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#B1B1B1',
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
          backgroundColor: '#FFFFFF',
        },
        tabBarScrollEnabled: true,
        tabBarPressColor: false
      }}
    >
      <Tab.Screen
        name="Searchmatch"
        component={Searchmatch}
        options={{
          tabBarLabel: ({ focused }) => (
            <View style={styles.tabItem}>
              <AntDesign
                name="search1"
                size={15}
                color={focused ? '#000000' : '#B1B1B1'}
              />
              <Text
                style={{
                  color: focused ? '#000000' : '#B1B1B1',
                  fontFamily: 'Urbanist-Medium',
                  fontSize: 14,
                }}
              >
                Search
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Newprofilematch"
        component={Newprofilematch}
        options={{ tabBarLabel: 'New' }}
      />
      <Tab.Screen
        name="Dailymatch"
        component={Dailymatch}
        options={{ tabBarLabel: 'Daily' }}
      />
      <Tab.Screen
        name="Mymatch"
        component={Mymatch}
        options={{ tabBarLabel: 'My Match' }}
      />
      <Tab.Screen
        name="Nearme"
        component={Nearme}
        options={{ tabBarLabel: 'Near Me' }}
      />
      <Tab.Screen
        name="Morematch"
        component={Morematch}
        options={{ tabBarLabel: 'More' }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
