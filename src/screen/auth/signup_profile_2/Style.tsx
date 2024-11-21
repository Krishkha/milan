import { StyleSheet } from "react-native";
import Fontfamily from "../../../shared/Strings/Font";
import Colors from "../../../shared/Strings/Colors";

const Signup_profile_2Styles = StyleSheet.create({
    mainContainer:{
        height:'100%',
        width:'100%'
    },
    logContainer:{
        width:'100%',
        height:'auto',
        alignItems:'center',
        gap:5,
        // backgroundColor:'red',
        paddingVertical:10,
        marginTop:50
    },
    logoText:{
        fontFamily:Fontfamily.Urbanist400,
        color: Colors.text6,
    },
    dropdownContainer:{
        width:'100%',
        height:'auto',
        gap:15,
        marginTop:10,
        paddingHorizontal:10
    },
    dropdownText:{
        fontSize:25,
        fontFamily:Fontfamily.Urbanist600,
        color:'black',
    },
    btn:{
        width:'100%',
        position:'absolute',
        marginHorizontal:'5%',
        bottom:20
    }
})

export default Signup_profile_2Styles;