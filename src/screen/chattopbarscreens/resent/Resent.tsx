import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../shared/Strings/Colors'
import Fontfamily from '../../../shared/Strings/Font'
import Octicons from 'react-native-vector-icons/Octicons';
import Resentdetail from '../../../shared/Strings/dummy_Text/Resentdetail';
import CustomLiveProfile from '../../../shared/Components/CustomLiveProfile';
import CustomButton from '../../../shared/Components/CustomButton';

export default function Resent() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>My Matches</Text>
            </View>
            <FlatList
                data={Resentdetail}
                horizontal
                scrollEnabled
                contentContainerStyle={styles.flatlist}
                renderItem={({ item, index }) =>
                    <CustomLiveProfile img={item.img} />
                }
            />
            <View style={styles.chatBox}>
                <Text style={styles.displayresult}>No Recent Chats</Text>
                <Text style={styles.displayresulttext}>there are no recent chats your partner search</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    header: {
        width: '100%',
        height: 'auto',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: Colors.backgrcound1,
    },
    heading: {
        color: Colors.text12,
        fontFamily: Fontfamily.Urbanist600,
        fontSize: 16
    },
    flatlist: {
        width: '100%',
        gap: 5,
        backgroundColor: Colors.backgrcound1,
        paddingVertical: 10
    },
    chatBox: {
        width: '100%',
        height: '83%',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    displayresult: {
        color: Colors.text6,
        fontSize: 24,
        fontFamily: Fontfamily.Urbanist600,
    },
    displayresulttext: {
        color: Colors.text1,
        textAlign: 'center',
        fontFamily: Fontfamily.Urbanist400,
        fontSize: 13,
        width: '40%'
    }
})