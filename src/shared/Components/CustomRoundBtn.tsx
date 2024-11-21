import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomRoundBtn({name,width,navigation,btnpadding}) {
    return (
        <TouchableOpacity onPress={navigation}>
            <LinearGradient colors={['#E461A3', '#E44C59']} style={[{width:width,padding:btnpadding},styles.loginButton]}>
                {name == 'Add From Gallery' ? <Feather name="image" size={15} color="white" />: name == 'PREMIUM' ? <MaterialCommunityIcons name="crown" size={15} color="white" />  : null }
                <Text style={styles.loginButtonText}>
                    {name}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    loginButton:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        marginTop:20,
        flexDirection:'row',
        gap:5

    },
    loginButtonText:{
        color:'white',
        fontSize:15,
        // backgroundColor:'red',
        // width:,
        fontFamily:'Urbanist-SemiBold',
    },
})