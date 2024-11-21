import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import CustomBackBtn from '../../../shared/Components/CustomBackBtn';
import CustomLiveProfile from '../../../shared/Components/CustomLiveProfile';
import { useNavigation, useRoute } from '@react-navigation/native';
import Colors from '../../../shared/Strings/Colors';
import Fontfamily from '../../../shared/Strings/Font';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { renderBubble, renderInputContainer, renderMessage, renderSend } from '../../../shared/giftchatFunctions/GiftchatFunctions';
import CustomChatbox from '../../../shared/Components/CustomChatbox';

export default function Chatbox() {

    const navigation = useNavigation();
    const route = useRoute();
    const chatData = route.params?.item || {};

    return (
        <View style={{ flex: 1, backgroundColor: '#f9f7f2' }}>
            <View style={styles.header}>
                <View style={styles.backbtn}>
                    <CustomBackBtn backbtnfun={()=> navigation.goBack() } />
                </View>
                {chatData.img && <CustomLiveProfile img={chatData.img} />}
                {chatData.name && <Text style={styles.name}>{chatData.name}</Text>}
                <View style={styles.iconbox}>
                    <TouchableOpacity>
                        <Feather name="video" size={25} color="#656565" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="call-outline" size={25} color="#656565" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="dots-vertical" size={25} color="#656565" />
                    </TouchableOpacity>
                </View>
            </View>
            <CustomChatbox />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.background5 || '#ddd',
    },
    backbtn: {
        width: 40,
    },
    name: {
        color: Colors.text13 || 'black',
        fontFamily: Fontfamily.Urbanist400 || 'Arial',
        fontSize: 16,
    },
    iconbox: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        gap: 15,
    },
    textInput: {
        // backgroundColor: 'red',
        fontFamily: Fontfamily.Urbanist400,
        fontSize: 16,
        color:Colors.text1
    },
    
});
