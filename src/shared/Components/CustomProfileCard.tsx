import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Fontfamily from '../Strings/Font';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import profileInfo from '../Strings/dummy_Text/dummyProfileCard';
import { useNavigation } from '@react-navigation/native';

export default function CustomProfileCard({ profileinfothroughhome }) {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Text style={styles.header}>Premium Matches ({profileInfo.length})</Text>
      <Text style={styles.text}>Recently upgraded Premium Members</Text>

      <FlatList
        data={profileinfothroughhome} // Limiting to the first six items
        renderItem={({ item }) => <ProfileCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
      <TouchableOpacity onPress={()=> navigation.navigate('Primium_match')} >
        <Text style={styles.seeallbtn}>See All</Text>
      </TouchableOpacity>
    </View>
  );
}

const ProfileCard = ({ item, index }) => (
  <View style={styles.cardBox} key={index}>
    <View style={styles.card}>
      <View style={styles.ImgBox}>
        <Image source={item.img} style={styles.img} />
        <View style={styles.profileNameContainer}>
          <Text style={styles.profilename}>{item.name}</Text>
        </View>
      </View>
      <View style={styles.otherInfoBox}>
        <Text style={styles.infoText}>{item.age} yrs, {item.height}, {item.language}</Text>
        <Text style={styles.infoText}>{item.religion}</Text>
        <Text style={styles.infoText}>{item.location}</Text>

        <TouchableOpacity style={styles.btn}>
          <FontAwesome6 name="check" size={15} color="#00C6FD" />
          <Text style={styles.btnText}>Connect Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  flatListContainer: {
    paddingVertical: 10,
  },
  Container: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    marginTop: 10,
    paddingLeft: 10,
    gap: 10,
    paddingHorizontal:5,
    marginBottom:10
  },
  header: {
    fontFamily: Fontfamily.Urbanist600,
    fontSize: 16,
    color: '#323232',
  },
  text: {
    fontFamily: Fontfamily.Urbanist400,
    color: '#323232',
    fontSize: 12,
  },
  card: {
    width: 163,
    marginRight: 10,
  },
  img: {
    width: 163,
    height: 160,
  },
  profileNameContainer: {
    backgroundColor: 'black',
    opacity: 0.6,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 5,
  },
  profilename: {
    fontFamily: Fontfamily.Urbanist400,
    color: '#FFFFFF',
    paddingLeft: 10,
  },
  otherInfoBox: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  infoText: {
    color: '#000000',
    fontFamily: Fontfamily.Urbanist400,
    fontSize: 15,
  },
  btn: {
    borderColor: '#00C6FD',
    borderWidth: 1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    gap: 10,
  },
  btnText: {
    color: '#00C6FD',
    fontFamily: Fontfamily.Inter400,
  },
  seeallbtn:{
    color:'#00C6FD',
    textAlign:'center',
    fontFamily: Fontfamily.Urbanist400,
    fontSize: 15,
    paddingVertical:10
  }
});
