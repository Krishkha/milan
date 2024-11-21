import { StyleSheet } from "react-native";
import Colors from "../../../shared/Strings/Colors";
import Fontfamily from "../../../shared/Strings/Font";

const Search_Style = StyleSheet.create({
    container:{
        width:'100%',
        height:'auto',
        alignItems:'center'
    },
    subContainer:{
        width:'95%',
        height:'auto',
        paddingHorizontal: 10,
        marginTop:10,
        backgroundColor:Colors.backgrcound1
    },
    subTitle:{
        color: Colors.text3,
        fontFamily: Fontfamily.Urbanist700,
        fontSize:14
    }
})

export default Search_Style;