import { StyleSheet } from "react-native";
import Fontfamily from "../../shared/Strings/Font";

const Home_Style = StyleSheet.create({
    blueTickBox:{
        width:'100%',
        flexDirection:'row',
        backgroundColor:'#95D2FF33',
        paddingHorizontal:10,
        paddingVertical:5,
        gap:5
    },
    bluetickText:{
        color:'black',
        fontFamily: Fontfamily.Urbanist400,
        fontSize:12,
        width:'86%'
    }
})

export default Home_Style;