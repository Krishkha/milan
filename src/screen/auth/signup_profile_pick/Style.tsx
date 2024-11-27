import { StyleSheet } from "react-native";
import Fontfamily from "../../../shared/Strings/Font";
import Colors from "../../../shared/Strings/Colors";

const Signup_profile_pickStyle = StyleSheet.create({
    maincontainer: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.backgrcound1,
    },
    pickBox: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        gap: 10,
        marginTop: 150
    },
    profileImg: {
        width: 90,
        height: 90
    },
    profileImgHead: {
        color: Colors.text6,
        textAlign: 'center',
        width: "100%",
        fontFamily: Fontfamily.Urbanist600,
        fontSize: 20
    },
    profileImgText: {
        color: Colors.text6,
        textAlign: 'center',
        width: "100%",
        fontFamily: Fontfamily.Urbanist400,
        fontSize: 10
    },
    pickerBtns: {
        width: "100%",
        height: "auto",
        alignItems: "center",
        gap: 10
    },
    camera: {
        color: Colors.text6,
        width: "50%",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        gap: 10
    },
    camaraText: {
        flexDirection: "row", 
        color: "#E44C59", 
        marginLeft: 5, 
        width: 80,
        fontFamily:Fontfamily.Urbanist600,
    },
    skipBts:{
        width:"100%",
        height:40,
        borderTopWidth:1,
        borderTopColor: Colors.bordercolor4,
        justifyContent:'center',
        alignItems:'center',
        position:"absolute",
        bottom:0,
        flexDirection:"row",
        gap:5
    },
    skipText:{
        color: Colors.text6,
        fontFamily:Fontfamily.Urbanist300,
        
    }
})

export default Signup_profile_pickStyle;