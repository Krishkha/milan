import { StyleSheet } from "react-native";
import Fontfamily from "../../../shared/Strings/Font";
import Colors from "../../../shared/Strings/Colors";

const Primium_match_Style = StyleSheet.create({
    header:{
        width:'100%',
        backgroundColor:'white',
        paddingVertical:10,
        paddingLeft:10,
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    heading:{
        color:Colors.text6,
        fontFamily: Fontfamily.Urbanist600,
        fontSize:16
    },
    mainContainer:{
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    subHeading:{
        width:'100%',
        justifyContent:'space-between', 
        flexDirection:'row',
        paddingHorizontal:10,
    },
    text:{
        color:Colors.text3,
        fontFamily: Fontfamily.Urbanist400,
        fontSize:12
    },
    cardContainer:{
        width:'100%',
        justifyContent:'center',
        paddingLeft:10
    }
})

export default Primium_match_Style;