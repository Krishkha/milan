import { StyleSheet } from "react-native";
import Colors from "../../shared/Strings/Colors";
import Fontfamily from "../../shared/Strings/Font";

const Splashstyle = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'100%',
        height:'100%',
        alignItems:'center'
    },
    logo_container:{
        width:200,
        height:200,
        backgroundColor:'#363435',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,
        overflow:'hidden'
    },
    logo_img:{
        width:200,
        resizeMode:'contain'
    },
    login_box:{
        width:'100%',
        height:'auto',
        marginTop:190,
        alignItems:'center'
    },
    text:{
        width:100,
        color:Colors.text3,
        fontFamily: Fontfamily.Urbanist600,
    },
    login_btn:{
        flexDirection:'row',
        borderWidth:1,
        borderColor: Colors.bordercolor3,
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        paddingVertical:10,
        borderRadius:20
    },
    login_btn_text:{
        color:Colors.text3,
        fontFamily: Fontfamily.Urbanist600,
        marginLeft:10
    },
    login_txt_1:{
        color:Colors.text3,
        textAlign:'left',
        flexDirection:'column',
        fontFamily: Fontfamily.Urbanist400,
    },
    login_txt_2:{
        color:Colors.text3,
        fontFamily: Fontfamily.Urbanist700,
    }
});

export default Splashstyle;