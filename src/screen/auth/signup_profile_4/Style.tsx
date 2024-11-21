import { StyleSheet } from "react-native";
import Fontfamily from "../../../shared/Strings/Font";
import Colors from "../../../shared/Strings/Colors";

const Signup_profile_4Styles = StyleSheet.create({
    mainContainer:{
        height:'100%',
        width:'auto',
        backgroundColor:'white'
    },
    logContainer:{
        width:'100%',
        height:'auto',
        alignItems:'center',
        gap:5,
        paddingVertical:10,
        marginTop:20
    },
    logoText:{
        fontFamily: Fontfamily.Urbanist400,
        color: Colors.text6,
    },
    dropdownContainer:{
        // backgroundColor:'lightblues',
        width:'100%',
        height:'auto',
        gap:15,
        marginTop:10,
        paddingHorizontal:10
    },
    dropdownText:{
        fontSize:25,
        fontFamily: Fontfamily.Urbanist600,
        color: Colors.text6,
    },
    numberBox:{
        flexDirection:'row',
        gap:10
    },
    infoBox:{
        width:'100%',
        flexDirection:'row',
        gap:10
    },
    infoText:{
        color: Colors.text6,
        fontFamily:Fontfamily.Urbanist400
    },
    btn:{
        width:'100%',
        position:'absolute',
        marginHorizontal:'5%',
        bottom:20
    }
})

export default Signup_profile_4Styles;