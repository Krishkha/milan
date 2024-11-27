import { Image, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Images from '../Strings/Image'
import Fontfamily from '../Strings/Font'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from './CustomButton'
import Colors from '../Strings/Colors'
import Icons from '../Strings/Icons'
import { useNavigation } from '@react-navigation/core'

export const ProfileImage = ({ img }) => {
    return (
        <View style={styles.profileImgBox} >
            <View style={styles.imgBox}>
                <Image source={img || Icons.noProfileUser} style={{ resizeMode: 'cover', width: '100%', height: '100%' }} />
            </View>
            <TouchableOpacity style={styles.plusebtn}>
                <AntDesign name='pluscircleo' color='white' size={30} />
            </TouchableOpacity>
        </View >
    )
}
export default function CustomProfileHome({ img }) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                {/* <Image source={Images.profileImg} /> */}
                <ProfileImage img={img} />
            </TouchableOpacity>
            <View>
                <Text style={styles.profilename}>Ashu Ahmad</Text>
                <TouchableOpacity style={styles.profileEditbtn}>
                    <Feather name="edit" size={15} color="#1EB8FF" />
                    <Text style={styles.editText}>Edit Profile</Text>
                </TouchableOpacity>
                <Text style={styles.normalText}> Account - Free</Text>
                <CustomButton name='Upgrade Membership' width='77%' navigation={()=> navigation.navigate('Premium') } />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#444444',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        gap: 10
    },
    profileImgBox: {
        width: 120,
        height: 120,
        borderWidth: 1,
        borderColor: Colors.bordercolor4,
        borderStyle: 'dashed',
        borderRadius: 60,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgBox: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        resizeMode: 'cover'
    },
    plusebtn: {
        width: 'auto',
        height: 'auto',
        backgroundColor: Colors.background3,
        position: 'absolute',
        top: -10,
        left: -15,
        borderRadius: 60

    },
    profilename: {
        fontFamily: Fontfamily.Urbanist600,
        fontSize: 20
    },
    profileEditbtn: {
        flexDirection: 'row',
        gap: 5
    },
    editText: {
        color: '#1EB8FF',
        fontFamily: Fontfamily.Urbanist400
    },
    normalText: {
        fontFamily: Fontfamily.Urbanist600
    }
})