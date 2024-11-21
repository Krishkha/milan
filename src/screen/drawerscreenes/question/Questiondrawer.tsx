import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontfamily from '../../../shared/Strings/Font';
import Colors from '../../../shared/Strings/Colors';
import FAQData from '../../../shared/Strings/dummy_Text/FAQData';


export default function Questiondrawer() {
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleExpand = (id) => {
        setExpandedItem((prev) => (prev === id ? null : id));
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={FAQData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <TouchableOpacity
                            onPress={() => toggleExpand(item.id)}
                            style={styles.questionBox}
                        >
                            <Text style={styles.questionText}>{item.question}</Text>
                            <Ionicons
                                name={expandedItem === item.id ? 'chevron-up-outline' : 'chevron-down-outline'}
                                size={20}
                                color="#333"
                            />
                        </TouchableOpacity>
                        {expandedItem === item.id && (
                            <Text style={styles.answerText}>{item.answer}</Text>
                        )}
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgrcound1,
        padding: 20,
    },
    itemContainer: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    questionBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        
    },
    questionText: {
        fontSize: 14,
        color: Colors.text11,
        fontFamily: Fontfamily.Urbanist500,
        width:'90%'
    },
    answerText: {
        fontSize: 14,
        color: Colors.text1,
        fontFamily: Fontfamily.Urbanist400,
        paddingBottom:10
    },
});
