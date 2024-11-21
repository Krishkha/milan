import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import SearchBox from '../../../shared/Components/SearchBox'
import Images from '../../../shared/Strings/Image'
import Fontfamily from '../../../shared/Strings/Font'
import Colors from '../../../shared/Strings/Colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import Blogdetail from '../../../shared/Strings/dummy_Text/Blogdetail'

export default function Blogdrawer() {
    return (

        <View style={styles.container}>
            <SearchBox searchwidth='90%' />
            <View style={styles.cardContainer}>
                <FlatList
                contentContainerStyle={styles.flatlist}
                scrollEnabled
                    data={Blogdetail}
                    renderItem={({ item, index }) =>
                        <View style={styles.card} key={index}>
                            <Image source={item.img} style={styles.img} />
                            <View style={{ gap: 10 }}>
                                <Text style={styles.heading}>{item.title}</Text>
                                <View style={styles.textBox}>
                                    <View style={styles.subtitleBox}>
                                        <Ionicons name='calendar-outline' color={Colors.text3} size={20} />
                                        <Text style={styles.subtitle} > {item.date}</Text>
                                    </View>

                                    <View style={styles.subtitleBox}>
                                        <Feather name='clock' color={Colors.text3} size={20} />
                                        <Text style={styles.subtitle} >{item.time}</Text>
                                    </View>

                                </View>
                                <View>
                                    <Text style={styles.biohead}>Bio</Text>
                                    <Text style={styles.bioText}>{item.bioText}</Text>
                                </View>
                            </View>
                        </View>
                    }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        alignItems: 'center',
        paddingTop: 20,
    },
    cardContainer: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        marginTop: 20,
        gap:10,
    },
    card: {
        width: '97%',
        height: 'auto',
        gap: 10,
        marginTop:16,
    },
    img: {
        width: '100%',
        height: 160,
        borderRadius: 20,
    },
    textBox: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
    },
    heading: {
        fontFamily: Fontfamily.Urbanist600,
        color: Colors.text6,
        textAlign: 'left',
        fontSize: 18
    },
    subtitleBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    subtitle: {
        fontFamily: Fontfamily.Urbanist500,
        color: Colors.text1,
        fontSize: 16,
    },
    biohead: {
        fontFamily: Fontfamily.Urbanist700,
        color: Colors.text1,
        fontSize: 16
    },
    bioText: {
        fontFamily: Fontfamily.Urbanist400,
        color: Colors.text1,
        fontSize: 16
    },
    flatlist:{
        width:'100%',
        paddingLeft:10
    }
})