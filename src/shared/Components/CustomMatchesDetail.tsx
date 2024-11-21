import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../Strings/Colors';
import Fontfamily from '../Strings/Font';


export default function CustomMatchesDetail({text1,text2,ischeck}) {
    return (
        <View style={{justifyContent:'space-between',flexDirection:'row',paddingHorizontal:10,borderBottomColor:Colors.bordercolor6,borderBottomWidth:1,marginTop:10,paddingVertical:10}}>
            <View style={{gap:5}}>
                <Text style={{fontFamily:Fontfamily.Urbanist400,color:Colors.text1,fontSize:15}}>{text1}</Text>
                <Text style={{fontFamily:Fontfamily.Urbanist500,color:Colors.text6,fontSize:16}}>{text2}</Text>
            </View>
            {
                ischeck == true ? <EvilIcons name='check' color={Colors.text5} size={25} /> : <AntDesign name='closecircleo' color={Colors.text6} size={20} />
            }
            
        </View>
    )
}
