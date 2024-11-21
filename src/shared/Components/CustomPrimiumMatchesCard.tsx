import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import CustomButton from './CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontfamily from '../Strings/Font';
import LinearGradient from 'react-native-linear-gradient';
import CustomRoundBtn from './CustomRoundBtn';
import Premium_match_data from '../Strings/dummy_Text/premium_match';
import { useNavigation } from '@react-navigation/native';
import CustomLinearText from './CustomLinearText';
import Colors from '../Strings/Colors';
import CustomPremiumBach from './CustomPremiumBach';

export default function CustomPrimiumMatchesCard() {
    const navigation = useNavigation();
    const [islike, setIsLike] = useState(false);

    return (
        <View style={{ width: '100%', justifyContent: 'center', gap: 10 }}>
            <FlatList
                style={{ width: '100%' }}
                data={Premium_match_data}
                renderItem={({ item, index }) =>
                    <TouchableOpacity style={styles.container} key={index} onPress={() => navigation.navigate('Connect_profile', { itemData: item })}>
                        <Image source={item.img} style={styles.profileImg} />

                        {/* Linear Gradient Overlay */}
                        <LinearGradient
                            colors={['#00000000', '#000000']}
                            style={styles.gradientOverlay}
                        />

                        <View style={styles.contain}>
                            <View style={styles.box1}>
                                <CustomPremiumBach />
                                <TouchableOpacity style={styles.likebtn} onPress={() => setIsLike(!islike)}>
                                    <AntDesign name="heart" size={20} color={islike ? 'red' : 'white'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.likebtn}>
                                    <Entypo name="share" size={20} color="#00C6FD" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.box2}>
                                <View style={styles.profileInfoBox}>
                                    <View style={{ flexDirection: 'row', gap: 10 }}>
                                        <Image source={require('../../assets/icons/blue_tick.png')} />
                                        <Text style={styles.name}>{item.name}</Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.text}>{item.age} yrs, {item.height}, {item.language}</Text>
                                        <Entypo name="dot-single" size={15} color="#FFFFFF" />
                                        <Text style={styles.text}>{item.job}</Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.text}>{item.cast}, {item.address} </Text>
                                        <Entypo name="dot-single" size={15} color="#FFFFFF" />
                                        <Text style={styles.text}>{item.country}</Text>
                                    </View>
                                </View>
                                <View style={styles.connectBox}>
                                    <Text style={[styles.text, { fontStyle: 'italic', fontSize: 16, marginTop: 10 }]}>Like this Profile?</Text>
                                    <CustomLinearText text="Connect Now" />
                                    <View style={styles.connectBtn}>
                                        <CustomRoundBtn
                                            name={<AntDesign name="check" size={20} />}
                                            btnpadding={15}
                                            navigation={() => navigation.navigate('Connect_profile', { itemData: item })}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 500,
        marginTop: 20,
        borderRadius: 10,
        borderTopWidth: 5,
        borderTopColor: Colors.bordercolor3,
        overflow: 'hidden',
    },
    profileImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    gradientOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        bottom: 0,
    },
    contain: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: -16,
    },
    box1: {
        alignItems: 'flex-end',
        gap: 10,
        top: 13,
    },
    likebtn: {
        backgroundColor: Colors.background2,
        width: 40,
        textAlign: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50,
        marginRight: 15,
    },
    box2: {
        position: 'absolute',
        bottom: -25,
        gap: 10,
        width: '100%',
    },
    profileInfoBox: {
        paddingLeft: 10,
    },
    name: {
        fontFamily: Fontfamily.Urbanist600,
        fontSize: 16,
        color: Colors.text2,
    },
    line: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    text: {
        fontFamily: Fontfamily.Urbanist400,
        color: Colors.text2,
    },
    connectBox: {
        borderTopWidth: 1,
        borderTopColor: Colors.backgrcound1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 45,
        gap: 10,
    },
    connectBtn: {
        bottom: 27,
    },
});
