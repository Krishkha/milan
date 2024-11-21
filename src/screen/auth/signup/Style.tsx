import { StyleSheet, Text } from "react-native";
import Fontfamily from "../../../shared/Strings/Font";
import Colors from "../../../shared/Strings/Colors";

const Signupstyle = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        // justifyContent: 'space-between',
        // alignItems:'center'
    },
    midContainer: {
        height: 'auto',
        width: '100%',
        marginTop:100,
    },
    logoBox: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: Colors.text1,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: Fontfamily.Urbanist400,
        marginTop: 10
    },
    dropdownBox:{
        paddingHorizontal:20,
        gap:15
    },
    dropdownLabel:{
        color:Colors.text6,
        fontFamily:Fontfamily.Urbanist600,
        fontSize:24
    },
    checkbox:{
        paddingVertical:10,
        paddingHorizontal:13,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center',
        width:'90%',
        gap:15
    },
    checkboxText:{
        color: Colors.text1,
        fontFamily:Fontfamily.Urbanist500
    },
    btn:{
        width:'100%',
        position:'absolute',
        bottom:20,
        marginHorizontal:'5%'
    }
})

export default Signupstyle;