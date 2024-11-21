import { Image, StyleSheet, Text, Touchable, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icons from '../../../shared/Strings/Icons'
import Fontfamily from '../../../shared/Strings/Font'
import Colors from '../../../shared/Strings/Colors'
import Images from '../../../shared/Strings/Image'
import CustomButton from '../../../shared/Components/CustomButton'

export default function Received() {
    const [contant, setContant] = useState(false)
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.heading}>All Request</Text>
                <TouchableOpacity>
                    <Image source={Icons.filterIcon} style={styles.img} />
                </TouchableOpacity>
            </View>
            <View style={styles.mainContainer}>
                {
                    contant == true ? <Text>data</Text> : <View style={styles.box}>
                        <View style={styles.imgbox}>
                            <Image source={Images.userImg} />
                        </View>
                        <View style={styles.textBox}>
                            <Text style={styles.heading2}>No Pending Request</Text>
                            <Text style={styles.text}>Check out more profiles and continue your partner search</Text>
                        </View>
                        <View style={{width:'100%',justifyContent:"center",alignItems:'center'}}>
                            <CustomButton name="View My Matches" width= "80%"  />
                        </View>
                    </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    heading: {
        fontFamily: Fontfamily.Urbanist400,
        color: Colors.text3,
        fontSize: 15
    },
    img: {
        width: 20,
        height: 20
    },
    mainContainer: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        top:100
    },
    imgbox: {
        borderWidth: 1,
        borderColor: Colors.bordercolor4,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        borderStyle: 'dashed'
    },
    textBox: {
        alignItems: 'center',
        gap: 10
    },
    heading2: {
        color: Colors.text6,
        fontFamily: Fontfamily.Urbanist600,
        fontSize: 24,
        textAlign: 'center',
        width: 120
    },
    text: {
        color: Colors.text1,
        fontFamily: Fontfamily.Urbanist400,
        fontSize: 13,
        width: 200,
        textAlign: 'center'
    }
})