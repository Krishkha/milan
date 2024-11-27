import { StyleSheet } from "react-native";
import Fontfamily from "../../shared/Strings/Font";
import Colors from "../../shared/Strings/Colors";

const Contect_profile_Style = StyleSheet.create({
    gradient: {
        flex: 1
    },
    backgroundImg: {
        width: '100%',
        height: 430, // Adjust this based on how tall you want the image to be
        justifyContent: 'center', // Ensure the content inside is centered
        paddingTop: 20, // Adjust for spacing from the top if needed
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    backbtn: {
        backgroundColor: Colors.background2,
        borderRadius: 50,
        padding: 10
    },

    box1: {
        width: '100%',
        alignItems: 'flex-end',
        gap: 10,
        marginTop: 10
    },
    likebtn: {
        backgroundColor: Colors.background2,
        width: 40,
        textAlign: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50,
        marginRight: 15
    },
    box2: {
        gap: 10,
        width: '100%',
        height: 224,
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    profileInfoBox: {
        paddingLeft: 25,
    },
    bluetick: {
        width: 20, 
        height: 20,
    },
    name: {
        fontFamily: Fontfamily.Urbanist600,
        fontSize: 20,
        color: Colors.text2
    },
    line: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    text: {
        fontFamily: Fontfamily.Urbanist400,
        color: Colors.text2
    },
    profileuserInfoContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    boxes: {
        backgroundColor: Colors.background1,
        paddingVertical: 15,
        paddingHorizontal: 15,
        gap: 5
    },
    boxesHead: {
        fontFamily: Fontfamily.Urbanist700,
        fontSize: 15,
        color: Colors.text3,
    },
    boxesText: {
        fontFamily: Fontfamily.Urbanist400,
        color: Colors.text3
    },
    viewMore: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10
    },
    viewMorebtn: {
        color: Colors.text4,
        fontFamily: Fontfamily.Urbanist400
    },
    hobbies: {
        borderWidth: 1,
        borderColor: Colors.bordercolor3,
        color: Colors.text5,
        fontFamily: Fontfamily.Urbanist400,
        textAlign: 'center',
        width: 80,
        paddingVertical: 5,
        borderRadius: 50,
        fontSize: 12
    },
    hobbirsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },
    perdetailBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },
    perdetail: {
        borderWidth: 1,
        borderColor: Colors.bordercolor3,
        color: Colors.text5,
        fontFamily: Fontfamily.Urbanist400,
        textAlign: 'center',
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 50,
        fontSize: 8
    },
    persionalDetailBox: {
        marginTop: 10,
        gap: 20
    },
    item: {
        flexDirection: 'row',
        gap: 10
    },
    iconBox: {
        backgroundColor: Colors.bordercolor4,
        padding: 7,
        borderRadius: 55
    },
    itemText: {
        color: Colors.text1,
        fontFamily: Fontfamily.Urbanist400,
        fontSize: 14
    },
    itemText2: {
        color: Colors.text6,
        fontFamily: Fontfamily.Urbanist500,
        fontSize: 15
    },
    contactBox: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopColor: Colors.bordercolor5,
        borderTopWidth: 5,
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10
    },
    mathescontainer: {
        width: '100%',
        height: 'auto',
    },
    gradientBox: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        gap: 20
    },
    text: {
        color: Colors.text2,
        fontSize: 18,
        fontFamily: Fontfamily.Urbanist500
    },
    imgBox: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img1: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 50,
        overflow: 'hidden'
    },
    image: {
        width: 100,
        height: 100
    },
    swipIcon: {
        position: 'absolute',
        bottom: 60
    },
    matchesDetail: {
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    matchesHeading: {
        fontFamily: Fontfamily.Urbanist700,
        color: Colors.text1
    },
    connactBox: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        // backgroundColor:'red',
        gap: 10,
        paddingHorizontal: 36,
        paddingVertical: 20
    },
    likeText: {
        fontFamily: Fontfamily.Urbanist400,
        fontStyle: 'italic',
        color: Colors.text1
    },
})

export default Contect_profile_Style;