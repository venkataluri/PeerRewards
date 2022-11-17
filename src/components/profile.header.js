import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RewardsContext} from '../context/rewards.context';

const ProfileHeader = () => {
  const {loggedUser, givenRewardsValue, takenRewardsValue} =
    useContext(RewardsContext);

  const [subTitle, setSubTitle] = useState('');

  useEffect(() => {
    const _title = `Given ${givenRewardsValue ?? 0} / Received ${
      takenRewardsValue ?? 0
    }`;

    setSubTitle(_title);
  }, [givenRewardsValue, takenRewardsValue]);
  return (
    <View style={styles.containerStyle}>
      <Icon name="user-circle" size={hp('7%')} color="#000" />

      <View style={styles.textContainer}>
        <Text style={styles.titleTextStyle}>{loggedUser}</Text>
        <Text style={styles.infoTextStyle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  containerStyle: {
    width: wp('100%'),
    height: hp('12%'),
    backgroundColor: '#F5F1EE',
    alignItems: 'center',
    flexDirection: 'row',
    padding: wp('5%'),
  },
  textContainer: {paddingLeft: wp('2%')},
  titleTextStyle: {fontSize: 16, fontWeight: 'bold'},
  infoTextStyle: {fontSize: 14},
});
