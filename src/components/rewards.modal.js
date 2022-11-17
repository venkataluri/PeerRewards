import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RewardsContext} from '../context/rewards.context';

const RewardsModal = () => {
  const {addReward, loggedUser} = useContext(RewardsContext);

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const giveRewards = () => {
    if (name?.length < 3 || amount?.length <= 0 || message?.length <= 3) {
      return;
    }

    const date = new Date();
    const newRewardData = {
      userName: name,
      rewardedBy: loggedUser,
      description: message,
      amount: parseInt(amount),
      time: date,
    };
    addReward(newRewardData);
    setName('');
    setAmount('');
    setMessage('');
  };

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>Give rewards</Text>
      <View style={styles.subContainerStyle}>
        <Text style={styles.fieldTitleStyle}>To</Text>
        <TextInput
          style={styles.textInputStyle}
          textAlignVertical="center"
          maxLength={50}
          autoCorrect={false}
          placeholder={''}
          onChangeText={text => {
            setName(text);
          }}
          value={name}
        />

        <Text style={styles.fieldTitleStyle}>Amount</Text>
        <TextInput
          style={styles.textInputStyle}
          textAlignVertical="top"
          maxLength={10}
          autoCorrect={false}
          keyboardType={'numeric'}
          placeholder={''}
          onChangeText={text => {
            setAmount(text);
          }}
          value={amount}
        />

        <Text style={styles.fieldTitleStyle}>Message</Text>
        <TextInput
          style={[
            styles.textInputStyle,
            {minHeight: hp('12%'), maxHeight: hp('25%')},
          ]}
          multiline={true}
          textAlignVertical="top"
          maxLength={5000}
          autoCorrect={false}
          placeholder={''}
          onChangeText={text => {
            setMessage(text);
          }}
          value={message}
        />

        <TouchableOpacity
          onPress={() => {
            giveRewards();
          }}
          style={styles.giveButtonStyle}>
          <Text style={styles.giveButtonTextStyle}>Give</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RewardsModal;

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    bottom: 0,
    height: hp('82%'),
    width: wp('100%'),
    backgroundColor: 'black',
    borderTopLeftRadius: wp('5%'),
    borderTopRightRadius: wp('5%'),
    alignItems: 'center',
  },
  titleStyle: {
    marginTop: hp('2%'),
    color: '#ffff',
    fontSize: 16,
    fontWeight: '600',
  },
  subContainerStyle: {width: wp('90%'), marginTop: hp('2%')},
  fieldTitleStyle: {
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
    color: '#8C7A69',
    fontSize: 16,
    fontWeight: '600',
  },
  textInputStyle: {
    height: hp('6%'),
    width: wp('90%'),
    borderColor: '#8C7A69',
    backgroundColor: 'transparent',
    borderWidth: 1,
    padding: wp('3%'),
    color: '#ffffff',
  },
  giveButtonStyle: {
    width: wp('75%'),
    height: hp('6%'),
    backgroundColor: '#ffff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('3%'),
    borderRadius: hp('3%'),
  },
  giveButtonTextStyle: {fontSize: 14, fontWeight: '500'},
});
