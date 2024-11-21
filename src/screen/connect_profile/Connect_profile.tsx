import { View, Text, ImageBackground, StatusBar, Image } from 'react-native'
import React, { useState } from 'react'
import Contect_profile_Style from './Style'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../shared/Components/CustomButton';
import Icons from '../../shared/Strings/Icons';
import Colors from '../../shared/Strings/Colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomPersonalInfoCard from '../../shared/Components/CustomPersonalInfoCard';
import CustomMatchesDetail from '../../shared/Components/CustomMatchesDetail';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomLinearText from '../../shared/Components/CustomLinearText';
import CustomRoundBtn from '../../shared/Components/CustomRoundBtn';
import Fontfamily from '../../shared/Strings/Font';
import CustomPremiumBach from '../../shared/Components/CustomPremiumBach';

export default function Connect_profile() {
    const navigation = useNavigation();
    const route = useRoute()

    const data = route.params.itemData;

    const [islike, setIsLike] = useState(false);

    return (
        <>
            <ScrollView>
                {/* Background image on the entire screen */}
                <ImageBackground source={data.img} style={Contect_profile_Style.backgroundImg}>
                    <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

                    {/* SafeAreaView to make sure content is inside the safe area */}
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={Contect_profile_Style.header}>
                            {/* Back Button */}
                            <TouchableOpacity style={Contect_profile_Style.backbtn} onPress={() => navigation.goBack()}>
                                <AntDesign name="arrowleft" size={20} color="#FFFFFF" />
                            </TouchableOpacity>

                            {/* Custom Premium Button */}
                            <CustomPremiumBach />
                        </View>

                        {/* Like and Share Buttons */}
                        <View style={Contect_profile_Style.box1}>
                            <TouchableOpacity style={Contect_profile_Style.likebtn} onPress={() => setIsLike(!islike)}>
                                <AntDesign name="heart" size={20} color={islike ? 'red' : 'white'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={Contect_profile_Style.likebtn}>
                                <Entypo name="share" size={20} color="#00C6FD" />
                            </TouchableOpacity>
                        </View>

                        {/* Profile Information */}
                        <View style={Contect_profile_Style.box2}>
                            <View style={Contect_profile_Style.profileInfoBox}>
                                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                    <Image source={require('../../assets/icons/blue_tick.png')} style={{ width: 20, height: 20 }} />
                                    <Text style={Contect_profile_Style.name}>{data.name}</Text>
                                </View>
                                <View style={Contect_profile_Style.line}>
                                    <Text style={Contect_profile_Style.text}>{data.age} yrs, {data.height}, {data.state}</Text>
                                    <Entypo name="dot-single" size={15} color="#FFFFFF" />
                                    <Text style={Contect_profile_Style.text}>{data.job}</Text>
                                </View>
                                <View style={Contect_profile_Style.line}>
                                    <Text style={Contect_profile_Style.text}>{data.cast}, {data.address} </Text>
                                    <Entypo name="dot-single" size={15} color="#FFFFFF" />
                                    <Text style={Contect_profile_Style.text}>India</Text>
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
                </ImageBackground>

                {/* About Section */}
                <View style={Contect_profile_Style.profileuserInfoContainer}>
                    <View style={Contect_profile_Style.boxes}>
                        <Text style={Contect_profile_Style.boxesHead}>About Priya Singh</Text>
                        <Text style={Contect_profile_Style.boxesText}>{data.about}</Text>
                        <TouchableOpacity style={Contect_profile_Style.viewMore}>
                            <Text style={Contect_profile_Style.viewMorebtn}>View More </Text>
                            <Entypo name="chevron-thin-down" size={15} color="#00C6FD" />
                        </TouchableOpacity>
                    </View>
                    {/* Hobbies Section */}
                    <View style={Contect_profile_Style.profileuserInfoContainer}>
                        <View style={Contect_profile_Style.boxes}>
                            <Text style={Contect_profile_Style.boxesHead}>Hobbies & Interests</Text>
                            <View style={Contect_profile_Style.hobbirsContainer}>
                                {data.hobbies.map((hobby, index) => (
                                    <Text key={index} style={Contect_profile_Style.hobbies}>{hobby}</Text>
                                ))}
                            </View>
                        </View>
                    </View>
                    {/* Detail Section */}
                    <View style={Contect_profile_Style.profileuserInfoContainer}>
                        <View style={Contect_profile_Style.boxes}>
                            <Text style={Contect_profile_Style.boxesHead}>Basic Details</Text>
                            <View style={[Contect_profile_Style.perdetailBox]}>
                                <Text style={Contect_profile_Style.perdetail}>Created by parent</Text>
                                <Text style={Contect_profile_Style.perdetail}>ID : {data.profileID}</Text>
                                <Text style={Contect_profile_Style.perdetail}>{data.age} Years old</Text>
                                <Text style={Contect_profile_Style.perdetail}>Height {data.height}</Text>
                            </View>
                            <View style={Contect_profile_Style.persionalDetailBox}>
                                <CustomPersonalInfoCard
                                    icon={<MaterialCommunityIcons name='calendar-check-outline' size={20} color='white' />}
                                    text1='Birth Date'
                                    text2={data.birthDate}
                                    bgcolor={Colors.background4}
                                />
                                <CustomPersonalInfoCard
                                    icon={<AntDesign name='user' size={20} color='white' />}
                                    text1='Marital Status'
                                    text2={data.marriedprofile}
                                    bgcolor={Colors.background4}
                                />
                                <CustomPersonalInfoCard
                                    icon={<SimpleLineIcons name='location-pin' size={20} color='white' />}
                                    text1='Lives in'
                                    text2={`${data.address}, ${data.country}`}  // Concatenating address and country
                                    bgcolor={Colors.background4}
                                />
                                <CustomPersonalInfoCard
                                    icon={<SimpleLineIcons name='location-pin' size={20} color='white' />}
                                    text1='Religion'
                                    text2={data.cast}
                                    bgcolor={Colors.background4}
                                />

                                <CustomPersonalInfoCard
                                    icon={<AntDesign name='addusergroup' size={20} color='white' />}
                                    text1='Community'
                                    text2={data.community}
                                    bgcolor={Colors.background4}
                                />
                                <CustomPersonalInfoCard
                                    icon={<AntDesign name='addusergroup' size={20} color='white' />}
                                    text1='Diet Preferences'
                                    text2={data.ditePref}
                                    bgcolor={Colors.background4}
                                />
                            </View>
                        </View>
                    </View>

                    {/* Contact Section */}
                    <View style={Contect_profile_Style.contactBox}>
                        <View style={Contect_profile_Style.boxes}>
                            <Text style={Contect_profile_Style.boxesHead}>Contact Details</Text>
                            <View style={Contect_profile_Style.persionalDetailBox}>
                                <CustomPersonalInfoCard
                                    icon={<Feather name='phone' size={20} color='white' />}
                                    iconname='calendar-check-outline'
                                    text1='Contact No.'
                                    text2={data.contactNo}
                                    bgcolor={Colors.background3}
                                />

                                <CustomPersonalInfoCard
                                    icon={<Feather name='mail' size={20} color='white' />}
                                    text1='Email ID'
                                    text2={data.email}
                                    bgcolor={Colors.background3}
                                />
                            </View>
                        </View>
                    </View>

                    {/* DetailCareer & Education Section */}
                    <View style={Contect_profile_Style.profileuserInfoContainer}>
                        <View style={Contect_profile_Style.boxes}>
                            <Text style={Contect_profile_Style.boxesHead}>Career & Education</Text>

                            <View style={Contect_profile_Style.persionalDetailBox}>
                                <CustomPersonalInfoCard
                                    icon={<MaterialCommunityIcons name='calendar-check-outline' size={20} color='white' />} iconname='calendar-check-outline' text1='Profession'
                                    text2={data.profession}
                                    bgcolor='#FFC727'
                                />
                                <CustomPersonalInfoCard
                                    icon={<MaterialCommunityIcons name='calendar-check-outline' size={20} color='white' />} iconname='calendar-check-outline' text1='Company Name'
                                    text2={data.companyName}
                                    bgcolor='#FFC727'
                                />
                                <CustomPersonalInfoCard
                                    icon={<MaterialCommunityIcons name='calendar-check-outline' size={20} color='white' />} iconname='calendar-check-outline' text1='Highest Qualification'
                                    text2={data.qulification}
                                    bgcolor='#FFC727'
                                />
                                <CustomPersonalInfoCard
                                    icon={<MaterialCommunityIcons name='calendar-check-outline' size={20} color='white' />} iconname='calendar-check-outline' text1='Education Field'
                                    text2={data.educationfield}
                                    bgcolor='#FFC727'
                                />
                                <CustomPersonalInfoCard
                                    icon={<MaterialCommunityIcons name='calendar-check-outline' size={20} color='white' />} iconname='calendar-check-outline' text1='College Name'
                                    text2={data.collegename}
                                    bgcolor='#FFC727'
                                />
                            </View>
                        </View>
                    </View>

                </View>

                {/* MatchesSection */}
                <View style={Contect_profile_Style.mathescontainer}>
                    <LinearGradient
                        colors={['#E461A3', '#E45373', '#FF9099']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={Contect_profile_Style.gradientBox}
                    >
                        <Text style={Contect_profile_Style.text}>You & Her</Text>
                        <View style={Contect_profile_Style.imgBox}>
                            <View style={Contect_profile_Style.img1}>
                                <Image source={data.img} style={Contect_profile_Style.image} />
                            </View>
                            <View style={Contect_profile_Style.img1}>
                                <Image source={data.img} style={Contect_profile_Style.image} />
                            </View>
                        </View>
                        <Image source={Icons.swipIcon} style={Contect_profile_Style.swipIcon} />
                    </LinearGradient>
                    <View style={Contect_profile_Style.matchesDetail}>
                        <Text style={Contect_profile_Style.matchesHeading}>You Match 5/9 of her Preferences</Text>

                        <CustomMatchesDetail text1='Age' text2='26 to 33' ischeck={true} />
                        <CustomMatchesDetail text1='height' text2='5’1”(154cm)' ischeck={true} />
                        <CustomMatchesDetail text1='Maritel Status' text2='never Married' ischeck={true} />
                        <CustomMatchesDetail text1='Religion' text2='Hindu' ischeck={true} />
                        <CustomMatchesDetail text1='Community' text2='Rajput' ischeck={true} />
                        <CustomMatchesDetail text1='County' text2='India' ischeck={false} />
                        <CustomMatchesDetail text1='Mother Tongue' text2='Bengali' ischeck={false} />
                        <CustomMatchesDetail text1='State Living In' text2='Delhi' ischeck={false} />
                        <CustomMatchesDetail text1='Annual Income' text2='5 lakh to 7 lakh' ischeck={false} />
                    </View>

                    <View style={{ paddingHorizontal: 20, gap: 20 }}>
                        <Text style={Contect_profile_Style.matchesHeading}>Common Between Both of you</Text>

                        <CustomPersonalInfoCard
                            icon={<MaterialCommunityIcons name='wallet-travel' size={20} color={Colors.text2} />}
                            text3='Both are not working'
                            bgcolor={Colors.bordercolor5}
                        />
                        <CustomPersonalInfoCard
                            icon={<Entypo name='location' size={20} color={Colors.text2} />}
                            text3='You both grow up India'
                            bgcolor={Colors.bordercolor5}
                        />
                        <CustomPersonalInfoCard
                            icon={<MaterialCommunityIcons name='calendar-check-outline' size={20} color={Colors.text2} />}
                            text3='You both enjoy non - vegiterian'
                            bgcolor={Colors.bordercolor5}
                        />
                    </View>
                    <View style={Contect_profile_Style.connactBox}>
                        <Text style={Contect_profile_Style.likeText}>Like this Profile?</Text>
                        <CustomLinearText text="Connect Me" />
                        {/* <View style={styles.connectBtn}> */}
                        <CustomRoundBtn name={<AntDesign name="check" size={20} />} btnpadding={15} width={49} />
                        {/* </View> */}
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
