import { View, Text, Image, Touchable, TouchableOpacity,StatusBar} from 'react-native'
import React, { useState } from 'react'
import Signupstyle from './Style';
import CustomButton from '../../../shared/Components/CustomButton';
import CustomDropdown from '../../../shared/Components/CustomDropdown';
import DropdownComponent from '../../../shared/Components/DropdownComponent';
import CheckBox from 'react-native-check-box'
import { useNavigation } from '@react-navigation/native';
import CustomProgressBar from '../../../shared/Components/CustomProgressBar';
import Icons from '../../../shared/Strings/Icons';

const Signup = () => {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);
    return (
        <>
        <StatusBar barStyle='dark-content' backgroundColor='white' />
            <View style={Signupstyle.mainContainer}>
                <CustomProgressBar progressbarWidth='40%'/>

                <View style={Signupstyle.midContainer}>
                    <View style={Signupstyle.logoBox}>
                        <Image source={Icons.locationIcon} />
                        <Text style={Signupstyle.text}>Now let’s build your Profile</Text>
                    </View>
                    <View style={Signupstyle.dropdownBox}>
                        <Text style={Signupstyle.dropdownLabel}>State</Text>
                        <DropdownComponent placeholdername='State you live in' />
                        <Text style={Signupstyle.dropdownLabel}>City</Text>
                        <DropdownComponent placeholdername='City you live in' />
                        <Text style={Signupstyle.dropdownLabel}>State</Text>
                        <DropdownComponent placeholdername='Your Sub - community' />
                    </View>
                    <View style={Signupstyle.checkbox}>

                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            isChecked={isChecked}
                            onClick={() => setIsChecked(!isChecked)}
                        />
                        <Text style={Signupstyle.checkboxText}>Not particular about my partner’s community (Caste no bar)</Text>
                    </View>
                </View>

                {/* SignUp Button */}
                <View style={Signupstyle.btn}>
                    <CustomButton name='Continue' width='90%' navigation={()=>navigation.navigate('profile_2')} />
                </View>
            </View>
        </>
    )
}

export default Signup;