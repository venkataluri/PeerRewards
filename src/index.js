import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ProfileHeader from './components/profile.header';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import FeedView from './components/feed';
import SegmentedButton from './components/segmented.buttons';
import RewardsView from './components/rewards';
import RewardsContextProvider from './context/rewards.context';
import RewardsModal from './components/rewards.modal';
import SwitchUserModal from './components/switch.user.modal';
import CancelIcon from 'react-native-vector-icons/Entypo';
import PlusIcon from 'react-native-vector-icons/AntDesign';

const Index = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [isGiveRewardsModalOpen, setIsGiveRewardsModalOpen] = useState(false);
  const [isSwitchUserModalOpen, setIsSwitchUserModalOpen] = useState(true);

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  const segmentedButtonCallback = index => {
    setSelectedTabIndex(index);
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <RewardsContextProvider>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ProfileHeader />
        <SegmentedButton
          selectedIndex={selectedTabIndex}
          segmentButtonCallback={segmentedButtonCallback}
        />
        <View style={styles.feedContainerStyle}>
          {selectedTabIndex === 0 ? <FeedView /> : <RewardsView />}
        </View>
        {isGiveRewardsModalOpen == true ? <RewardsModal /> : null}
        <TouchableOpacity
          onPress={() => {
            setIsGiveRewardsModalOpen(!isGiveRewardsModalOpen);
          }}
          style={styles.addRewardsButtonStyle}>
          {isGiveRewardsModalOpen == true ? (
            <CancelIcon name="cross" size={hp('3%')} color="#ffffff" />
          ) : (
            <PlusIcon name="plus" size={hp('3%')} color="#ffffff" />
          )}
        </TouchableOpacity>
        {isGiveRewardsModalOpen == true ? null : (
          <TouchableOpacity
            onPress={() => {
              setIsSwitchUserModalOpen(!isSwitchUserModalOpen);
            }}
            style={styles.switchUserButtonStyle}>
            <Text style={styles.switchUserTextStyle}>switch user</Text>
          </TouchableOpacity>
        )}

        {isSwitchUserModalOpen === true ? (
          <SwitchUserModal
            closeModal={() => {
              setIsSwitchUserModalOpen(false);
            }}
          />
        ) : null}
      </RewardsContextProvider>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  addRewardsButtonStyle: {
    position: 'absolute',
    bottom: hp('10%'),
    right: wp('5%'),
    width: wp('10'),
    height: wp('8%'),
    borderRadius: hp('3%'),
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchUserButtonStyle: {
    position: 'absolute',
    bottom: hp('10%'),
    left: wp('5%'),
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('3%'),
    borderRadius: hp('3%'),
  },
  switchUserTextStyle: {color: 'white', fontSize: 20, paddingBottom: 8},
  addRewardsTextStyle: {color: 'white', fontSize: 24, paddingBottom: 8},
  feedContainerStyle: {flex: 1, backgroundColor: '#FFFFFF'},
});
