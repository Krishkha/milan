import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '../../../shared/Strings/Colors'
import Fontfamily from '../../../shared/Strings/Font'
import ChatData from '../../../shared/Strings/dummy_Text/ChatData'
import CustomLiveProfile from '../../../shared/Components/CustomLiveProfile'
import Icons from '../../../shared/Strings/Icons'

export default function Calls() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Contact</Text>
      <View>
        <ScrollView>
          {ChatData.map((item) => (
            <View key={item.id} style={styles.userchar}>
              <View style={styles.box1}>
                <CustomLiveProfile img={item.img} />
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.text}>
                    <Image source={item.callstatus} style={item.callstatus == Icons.missedCallIcon ? styles.misscall: styles.call} />
                    {item.day},{item.callTime}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <TouchableOpacity>
                  <Image source={Icons.VideorecordIcon} style={{ width: 25, height: 25, tintColor: '#656565' }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={Icons.phoneIcon} style={{ width: 20, height: 20, tintColor: '#656565' }} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.backgrcound1
  },
  heading: {
    color: Colors.text12,
    fontFamily: Fontfamily.Urbanist600,
    paddingLeft: 10,
    fontSize: 16
  },
  userchar: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.bordercolor4,
  },
  box1: {
    flexDirection: 'row',
    gap: 10,
  },
  imgbox: {
    height: 60,
    width: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  icon: {
    position: 'absolute',
    top: 40,
    right: 3,
  },
  name: {
    fontFamily: Fontfamily.Urbanist400,
    color: Colors.text13,
    fontSize: 18,
  },
  text: {
    fontFamily: Fontfamily.Urbanist400,
    color: Colors.text14,
    fontSize: 12,
  },
  time: {
    fontFamily: Fontfamily.Urbanist400,
    color: Colors.text14,
    height: '100%',
    textAlignVertical: 'center',
  },
  call: {
    width: 15,
    height: 15,
    tintColor: '#4CD964',
  },
  misscall: {
    width: 15,
    height: 15,
    tintColor: '#E44C59'
  },
})