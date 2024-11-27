import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import CustomProfileHome from './CustomProfileHome';
import { TouchableHighlight } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../Strings/Colors';
import Fontfamily from '../Strings/Font';
import DropdownBtn from '../Strings/DropdownBtn';
import Images from '../Strings/Image';

export default function CustomDrawerContent(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} style={{backgroundColor:'#F9F7F2'}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
        >
          <AntDesign name="close" size={25} color="black" />
        </TouchableOpacity>
      </View>

      {/* User profile  */}
      <CustomProfileHome img={Images.premium_match_1} />
      {/* other Buttons */}
      <View style={styles.btnContainer}>
        <FlatList
        contentContainerStyle={styles.flatlist}
        data={DropdownBtn}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item, index})=>
          <TouchableOpacity style={styles.btn} key={index} onPress={() => item.title == 'Logout' ? navigation.replace(item.screen) : navigation.navigate(item.screen) }>
          <View style={{flexDirection:'row',gap:10}}>
            <Image source={item.icon} style={{width:20,height:20,resizeMode:'contain'}} />
            <Text style={styles.btnText}>{item.title}</Text>
          </View>
          <Entypo name='chevron-small-right' color='black' size={20} />
        </TouchableOpacity>
        }
        />
        
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 0,
  },
  closeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  closeText: {
    fontSize: 16,
    marginLeft: 10,
    color: 'black',
  },
  btnContainer: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: Colors.backgrcound1,
    width: '95%',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent:'space-between',
    gap: 10,
    borderRadius: 5,
    marginTop:10
  },
  btnText: {
    color: Colors.text9,
    fontFamily: Fontfamily.Urbanist400,
    fontSize: 16
  },
  flatlist:{
    flex: 1,
    alignItems:'center'
  }
});
