import {StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import React, {useEffect, useState} from 'react';
import moment from 'moment';

const FeedItem = ({item}) => {
  const [timeDiff, setTimeDiff] = useState('1 secs ago');
  useEffect(() => {
    let now = moment(new Date());
    let end = moment(`${item.time}`);
    let duration = moment.duration(now.diff(end));
    let hoursDiff = duration.asHours();
    let minutesDiff = duration.asMinutes();
    let secondDiff = duration.asSeconds();

    const diffTime =
      hoursDiff > 1
        ? `${parseInt(hoursDiff)} hrs ago`
        : minutesDiff > 1
        ? `${parseInt(minutesDiff)} mins ago`
        : `${parseInt(secondDiff)} sec ago`;

    setTimeDiff(diffTime);
  }, [item]);
  return (
    <View style={styles.containerStyle}>
      <View style={styles.imageView}>
        <Icon name="user" size={hp('4%')} color="#000" />
      </View>
      <View style={styles.textContainerStyle}>
        <Text
          style={
            styles.descriptionStyle
          }>{`${item.description.trimEnd()}`}</Text>
        <Text
          style={
            styles.infoTextStyle
          }>{`${item.userName} Rewarded by ${item.rewardedBy}`}</Text>
        <Text style={styles.timeTextStyle}>{timeDiff}</Text>
      </View>
    </View>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    padding: wp('5%'),
    paddingTop: hp('1%'),
    paddingBottom: hp('1%'),
    alignItems: 'flex-start',
  },
  imageView: {
    width: hp('6%'),
    height: hp('6%'),
    borderRadius: hp('3%'),
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainerStyle: {
    paddingLeft: wp('2%'),
    paddingRight: wp('2%'),
    justifyContent: 'center',
    flex: 1,
  },
  descriptionStyle: {color: '#606060', fontSize: 14, fontWeight: '600'},
  infoTextStyle: {color: '#C6B8A8', fontSize: 12, marginTop: hp('1%')},
  timeTextStyle: {color: '#C6B8A8', fontSize: 12},
});
