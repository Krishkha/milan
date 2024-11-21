import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
];

const DropdownComponent = ({placeholdername,dropdownWidth}) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <>
            <Dropdown
                style={[{width:dropdownWidth},styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                itemTextStyle={styles.itemTextStyle}
                labelField="label"
                valueField="value"
                placeholder={placeholdername}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />
            </>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 3,
        paddingHorizontal: 8,
        color:'black'
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        color:'black',
        fontFamily:'Urbanist-Regular'

    },
    placeholderStyle: {
        fontSize: 16,
        color:'black',
        fontFamily:'Urbanist-Regular'
    },
    selectedTextStyle: {
        fontSize: 16,
        color:'black',
        fontFamily:'Urbanist-Regular'

    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    itemTextStyle: {
        fontSize: 16,
        color: 'black',
        fontFamily:'Urbanist-Regular'

    },
});