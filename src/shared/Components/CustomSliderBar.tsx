import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { runOnJS } from 'react-native-reanimated';
import CustomSliderCard from './CustomSliderCard';
import OfferCard from '../Strings/OfferCard';
import Colors from '../Strings/Colors';

const { width } = Dimensions.get('window');

const CustomSliderBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderButtons = ['S', 'G', 'G+', 'D', 'D+', 'P+'];

  const handleButtonPress = (value) => {
    if (currentIndex !== value) {
      setCurrentIndex(value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sliderBtnBox}>
        {sliderButtons.map((label, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleButtonPress(index)}
            style={[
              styles.sliderBtn,
              currentIndex === index && styles.activeSliderBtn,
            ]}
            accessible={true}
            accessibilityLabel={`Slider button ${label}`}
          >
            <Text
              style={[
                styles.sliderBtnText,
                currentIndex === index && styles.activeSliderBtnText,
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Carousel
        style={styles.carousel}
        width={width}
        height={360}
        data={OfferCard}
        pagingEnabled
        snapEnabled
        onSnapToItem={(value) => runOnJS(setCurrentIndex)(value)}
        index={currentIndex}
        renderItem={({ item, index }) => (
          <CustomSliderCard key={index} index={index} item={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  sliderBtnBox: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  sliderBtn: {
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.bordercolor4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  activeSliderBtn: {
    backgroundColor: Colors.backgrcound1,
    borderColor: Colors.text5,
  },
  sliderBtnText: {
    fontSize: 12,
    color: Colors.text2,
  },
  activeSliderBtnText: {
    color: Colors.text5,
    fontWeight: 'bold',
  },
  carousel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomSliderBar;
