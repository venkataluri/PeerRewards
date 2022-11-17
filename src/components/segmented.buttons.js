import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const SegmentedButton = ({selectedIndex, segmentButtonCallback}) => {
  const [segmentedButtons] = useState(['Feed', 'My Rewards']);

  return (
    <View style={styles.containerStyle}>
      {segmentedButtons.map((item, index) => {
        return (
          <TouchableHighlight
            key={index}
            style={[
              styles.segmentButtonStyle,
              {
                backgroundColor:
                  selectedIndex === index ? '#FFFFFF' : '#E4E2DF',
                borderTopLeftRadius: index === 0 ? 8 : 0,
                borderTopRightRadius:
                  index === segmentedButtons.length - 1 ? 8 : 0,
              },
            ]}
            activeOpacity={10}
            onPress={async () => {
              segmentButtonCallback(index);
            }}>
            <Text
              style={
                (styles.buttonTextStyle,
                {
                  color: selectedIndex === index ? '#C6B8A8' : '#424140',
                })
              }>
              {item}
            </Text>
          </TouchableHighlight>
        );
      })}
    </View>
  );
};

export default SegmentedButton;

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    width: wp('100%'),
    height: hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
});
