import { StyleSheet } from "react-native";
import Fontfamily from "../../shared/Strings/Font";

const Premium_Styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    gradientBox: {
        width: '100%',
        height: 'auto',
        paddingVertical:10,
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',

    },
    text: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily:Fontfamily.Urbanist600,
    },
    skipBtn:{
        color:'#E3E3E3',
        fontFamily:Fontfamily.Urbanist400,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    skipbtnText:{
        fontFamily:Fontfamily.Urbanist400,
        color:'#E3E3E3'
    },
    gradientBox2:{
        width:'100%',
        height:400
    },
    validBox:{
        marginTop:40,
        alignItems:'center'
    },
    validBoxHead:{
        textAlign:'center',
        fontFamily:Fontfamily.Urbanist600,
        fontSize:18,
        color:'#FFFFFF'
    },
    
    buyplanbtn:{
        position:'absolute',
        bottom:50,
        width:'100%',
        paddingLeft:100
    }
})

export default Premium_Styles;