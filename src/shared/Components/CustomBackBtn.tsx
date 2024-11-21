import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function CustomBackBtn({backbtnfun}) {
    return (
        <TouchableOpacity style={[styles.backbtn]} onPress={backbtnfun}>
            <AntDesign name="arrowleft" size={25} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backbtn:{
        paddingHorizontal:5,
        paddingVertical:10,
        width:'100%',
        // backgroundColor:'red'
    }
})