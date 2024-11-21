import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontfamily from '../Strings/Font';
import Colors from '../Strings/Colors';
import Searchmatch from '../../screen/toptabscreens/search/Searchmatch';
import Newprofilematch from '../../screen/toptabscreens/newprofile/Newprofilematch';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

// Define tabs with actual components
const tabs = [
    { id: 1, name: 'Search', component: Searchmatch },
    { id: 2, name: 'New', component: Newprofilematch },
    { id: 3, name: 'Daily', component: () => <Text style={styles.content}>Daily Screen</Text> },
    { id: 4, name: 'My Match', component: () => <Text style={styles.content}>My Match Screen</Text> },
    { id: 5, name: 'Near Me', component: () => <Text style={styles.content}>Near Me Screen</Text> },
    { id: 6, name: 'More', component: () => <Text style={styles.content}>More Screen</Text> },
];

export default function CustomTopTab() {
    const [activeTab, setActiveTab] = useState(0);

    // Get the active screen component
    // const ActiveScreen = tabs[activeTab]?.component;

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Custom Tabs */}
            <FlatList
                data={tabs}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.tabContainer}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={[
                            styles.tab,
                            activeTab === index && styles.activeTab,
                        ]}
                        onPress={() => navigation.navigate(item.component)}
                    >
                        {item.name === 'Search' ? (
                            <AntDesign
                                name="search1"
                                size={15}
                                color={activeTab === index ? '#000000' : '#B1B1B1'}
                            />
                        ) : null}
                        <Text
                            style={[
                                styles.tabText,
                                activeTab === index && styles.activeTabText,
                            ]}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            {/* Active Screen */}
            {/* <View style={styles.screen}> */}
                {/* Render the active screen component */}
                {/* {ActiveScreen ? <ActiveScreen /> : null} */}
            {/* </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: Colors.backgrcound1,
    },
    tabContainer: {
        backgroundColor: Colors.backgrcound1,
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: Colors.backgrcound1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    activeTab: {
        borderBottomColor: Colors.bordercolor5,
        borderBottomWidth: 2,
    },
    tabText: {
        fontSize: 14,
        color: Colors.text7,
        fontFamily: Fontfamily.Urbanist500,
    },
    activeTabText: {
        color: Colors.text6,
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
    },
});
