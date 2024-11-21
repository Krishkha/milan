import { PixelRatio, StyleSheet } from "react-native";
import Fontfamily from "../../../shared/Strings/Font";

const Family_detail_Styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:'100%',
        color:'white'
    },
    skipBtnBox:{
        width:'100%',
        height:'auto',
        color:'black',
        alignItems:'flex-end',
        paddingVertical:15,
        paddingRight:10
    },
    skipBtn:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },  
    skipBtnText:{
        color:'black',
        fontFamily:Fontfamily.Urbanist400,
        fontSize:18
    },
    midContainer:{
        width:'100%',
        height:'auto',
        alignItems:'center',
        marginTop:70
    },
    dropdownBox:{
        marginTop:30,
        width:'100%',
        paddingLeft:10,
        gap:5
    },
    heading:{
        color:'black',
        textAlign:'left',
        fontFamily:Fontfamily.Urbanist600,
        fontSize:23,
    },
    text:{
        color:'black',
        fontFamily:Fontfamily.Urbanist400,
        fontSize:15
    },
    dropdown:{
        gap:15
    },
    skipBts:{
        width:"100%",
        height:40,
        borderTopWidth:1,
        borderTopColor:'#E3E3E3',
        justifyContent:'center',
        alignItems:'center',
        position:"absolute",
        bottom:0,
        flexDirection:"row",
        gap:5
    },
    skipText:{
        color:'black',
        fontFamily:Fontfamily.Urbanist300,
        
    }
})

export default Family_detail_Styles;