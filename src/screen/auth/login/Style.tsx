import { StyleSheet } from "react-native";
import Colors from "../../../shared/Strings/Colors";
import Fontfamily from "../../../shared/Strings/Font";

const Loginstyle = StyleSheet.create({
    main_container: {
        alignItems: 'center',
        backgroundColor: Colors.backgrcound1,
    },
    welcome_container: {
        width: '100%',
        height: 100,
        alignItems: 'center', gap: 5,
        marginTop: 150,
    },
    welcome_txt: {
        fontFamily: Fontfamily.Urbanist600,
        color: Colors.text3,
        fontSize: 25,
    },
    welcome_txt_2: {
        fontFamily: Fontfamily.Urbanist400,
        color: Colors.text3,
        fontSize: 15,
    },
    google_btn: {
        color: Colors.text6,
        backgroundColor: Colors.backgrcound1,
        marginTop: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 20,
        paddingHorizontal: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    google_btn_txt: {
        color: Colors.text6,
        fontSize: 14,
        width: 130,
        flexDirection: 'row',
        fontWeight: '500',
        fontFamily: 'Urbanist-SemiBold'
    },
    gap_box: {
        marginTop: 70,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2
    },
    line: {
        width: '40%',
        backgroundColor: Colors.background5,
        height: 1
    },
    input_box: {
        width: '100%',
        height: 100,
        margin: 20,
        alignItems: 'center',
        gap: 10
    },
    forgot_pass_box: {
        width: '100%',
        height: 50,
        // backgroundColor:'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    login_tuch_btn: {
        color: '#00D8D8',
        fontFamily: Fontfamily.Urbanist500,
        fontSize: 12
    },
    loginButton: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        width: 200,
        borderRadius: 20,
        marginTop: 20,
    },
    loginButtonText: {
        color: Colors.text2,
        fontSize: 20,
        width: 100,
        textAlign: 'center',
        fontFamily: Fontfamily.Urbanist600
    },
    signupBox: {
        backgroundColor: Colors.backgrcound1,
        height: 50,
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: Colors.bordercolor4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    signupText: {
        // backgroundColor:'red',
        color: Colors.text3,
        fontSize: 12,
        fontWeight: '300'
    },
    signupText_2: {
        color: Colors.text3,
        fontFamily: Fontfamily.Urbanist300,
        fontSize: 12,
    }
})

export default Loginstyle;