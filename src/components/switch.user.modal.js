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

const SwitchUserModal = ({closeModal}) => {
  const {loggedUser, setLoggedUser} = useContext(RewardsContext);
  const [userName, setUserName] = useState('');
  return (
    <View style={styles.mainContainerStyle}>
      <View
        style={[
          styles.mainContainerStyle,
          {
            backgroundColor: 'grey',
            opacity: 0.8,
          },
        ]}
      />
      <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>Enter User Name</Text>

        <Text style={styles.fieldTitleStyle}>Name</Text>
        <TextInput
          style={[styles.textInputStyle]}
          textAlignVertical="top"
          maxLength={50}
          autoCorrect={false}
          placeholder={''}
          onChangeText={text => {
            setUserName(text);
          }}
          value={userName}
        />
        <View style={styles.buttonsContainerStyle}>
          <TouchableOpacity
            disabled={!loggedUser}
            onPress={() => {
              closeModal();
            }}
            style={[
              styles.buttonStyle,
              {backgroundColor: loggedUser ? '#ffffff' : 'grey'},
            ]}>
            <Text style={styles.buttonTextStyle}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={userName.length < 2}
            onPress={() => {
              setLoggedUser(userName);
              closeModal();
            }}
            style={[
              styles.buttonStyle,
              {backgroundColor: userName.length < 2 ? 'grey' : '#ffffff'},
            ]}>
            <Text style={styles.buttonTextStyle}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SwitchUserModal;

const styles = StyleSheet.create({
  mainContainerStyle: {
    position: 'absolute',
    width: wp('100%'),
    height: hp('100%'),
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    width: wp('98%'),
    height: hp('30%'),
    borderRadius: wp('5%'),
    alignSelf: 'center',
    backgroundColor: '#000000',
    alignItems: 'center',
    padding: wp('4%'),
  },
  titleStyle: {
    marginTop: hp('2%'),
    color: '#ffff',
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
  fieldTitleStyle: {
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
    color: '#8C7A69',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  buttonsContainerStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: wp('90%'),
    marginTop: hp('2%'),
    justifyContent: 'space-around',
  },
  buttonStyle: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('3%'),
    paddingLeft: wp('6%'),
    paddingRight: wp('6%'),
    borderRadius: hp('3%'),
  },
  buttonTextStyle: {fontSize: 14, fontWeight: '500'},
});
