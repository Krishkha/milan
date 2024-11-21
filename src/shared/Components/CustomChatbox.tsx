
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import CustomBackBtn from '../../../shared/Components/CustomBackBtn';
import CustomLiveProfile from '../../../shared/Components/CustomLiveProfile';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { renderBubble, renderInputContainer, renderMessage, renderSend } from '../../shared/giftchatFunctions/GiftchatFunctions';
import Fontfamily from '../Strings/Font';
import Colors from '../Strings/Colors';

export default function CustomChatbox({fistChat}) {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: fistChat || 'Hello',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ]);
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages)
        );
    }, []);


    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
            renderBubble={renderBubble}
            renderSend={renderSend}
            alwaysShowSend
            textInputStyle={styles.textInput}
            renderInputToolbar={renderInputContainer}
            placeholder='Type Your Message'
        />

    );
}

const styles = StyleSheet.create({
    textInput: {
        // backgroundColor: 'red',
        fontFamily: Fontfamily.Urbanist400,
        fontSize: 16,
        color: Colors.text1
    },

});
