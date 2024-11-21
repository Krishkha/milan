import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Fontfamily from '../../../shared/Strings/Font';
import Colors from '../../../shared/Strings/Colors';
import Notifidetail from '../../../shared/Strings/dummy_Text/Notifidetail';

export default function NotificationDrawer() {
    return (
        <View style={styles.container}>
            <ScrollView>
                {Notifidetail.map((group) => (
                    <View key={group.id} style={styles.notifyBox}>
                        <Text style={styles.heading}>{group.date}</Text>
                        {group.desc.map((notification, index) => (
                            <View key={index} style={styles.descBox}>
                                <View style={styles.textBox}>
                                    <Text style={styles.description}>{notification.text}</Text>
                                </View>
                                <Text style={styles.time}>{notification.time}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background1, // Example for full background color
        padding: 16,
    },
    notifyBox: {
        width: '100%',
        paddingVertical: 12,
        alignItems: 'flex-start',
        gap: 14,
    },
    heading: {
        fontFamily: Fontfamily.Urbanist600,
        fontSize: 17,
        color: Colors.text11,
        marginBottom: 8,
    },
    descBox: {
        width: '100%',
        backgroundColor: Colors.background6,
        padding: 12,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textBox: {
        flex: 1,
        paddingRight: 10,
    },
    description: {
        fontFamily: Fontfamily.Urbanist400,
        fontSize: 14,
        color: Colors.text11,
    },
    time: {
        fontFamily: Fontfamily.Urbanist400,
        fontSize: 12,
        color: Colors.text9,
        height: '100%',
        textAlignVertical: 'bottom',
    },
});
