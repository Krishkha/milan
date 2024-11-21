import { Bubble, InputToolbar, Send, Message } from "react-native-gifted-chat";
import Colors from "../Strings/Colors";
import Fontfamily from "../Strings/Font";
import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useRoute } from "@react-navigation/native";

export const renderBubble = (props) => {
    if (props.position === 'right') {
        return (
            <LinearGradient
                colors={['#E461A3', '#E44C59']}
                style={{
                    borderRadius: 15,
                    padding: 10,
                }}
            >
                <Text
                    style={{
                        color: Colors.text2,
                        fontFamily: Fontfamily.Urbanist400,
                    }}
                >
                    {props.currentMessage.text}
                </Text>
            </LinearGradient>
        );
    } else {
        return (
            <Bubble
    {...props}
    wrapperStyle={{
        left: {
            backgroundColor: '#F2F4F5',
            borderRadius: 20,
            width: 'auto',
            alignItems: 'center',
        },
    }}
    textStyle={{
        left: {
            fontFamily: Fontfamily.Urbanist400, // Replace with your desired font family
            fontSize: 16, // Optional: Adjust font size
            color: '#000', // Optional: Customize text color
        }
    }}
/>
        );
    }
};

export const renderSend = (props) => {
    return (
        <Send {...props}>
            <Image source={require('../../assets/icons/send_icon.png')} style={styles.sendIcon} />
        </Send>
    );
};

export const renderInputContainer = (props) => {
    return (
        <View style={styles.inputContainer}>
            <AntDesign name='pluscircleo' size={20} color='black' />
            <InputToolbar {...props} containerStyle={styles.inputToolbar} />
        </View>
    );
};



const styles = StyleSheet.create({
    inputContainer: {
        width: '90%',
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: Colors.backgrcound1,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        paddingHorizontal: 15
    },
    inputToolbar: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
        borderRadius: 50
    },
    sendIcon: {
        width: 25,
        height: 25,
    },
});
