 import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../shared/Strings/Colors';
import Fontfamily from '../../../shared/Strings/Font';
import Octicons from 'react-native-vector-icons/Octicons';
import ChatData from '../../../shared/Strings/dummy_Text/ChatData';
import CustomLiveProfile from '../../../shared/Components/CustomLiveProfile';

export default function Active() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>My Matches</Text>
            <ScrollView>
                {ChatData.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.userchar} onPress={()=> navigation.navigate('ChatBox',{item:item})}>
                        <View style={styles.box1}>
                            <CustomLiveProfile img={item.img} />
                            <View>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.text}>{item.working}</Text>
                                <Text style={styles.text}>{`${item.age} yrs, ${item.state}`}</Text>
                            </View>
                        </View>
                        <Text style={styles.time}>{item.timing}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.backgrcound1,
    },
    heading: {
        color: Colors.text12,
        fontFamily: Fontfamily.Urbanist600,
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    userchar: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.bordercolor4,
    },
    box1: {
        flexDirection: 'row',
        gap: 10,
    },
    imgbox: {
        height: 60,
        width: 60,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 60,
    },
    icon: {
        position: 'absolute',
        top: 40,
        right: 3,
    },
    name: {
        fontFamily: Fontfamily.Urbanist400,
        color: Colors.text13,
        fontSize: 18,
    },
    text: {
        fontFamily: Fontfamily.Urbanist400,
        color: Colors.text14,
    },
    time: {
        fontFamily: Fontfamily.Urbanist400,
        color: Colors.text14,
        height: '100%',
        textAlignVertical: 'center',
    },
});
