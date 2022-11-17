import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';
import FeedItem from '../feed.item';
import {RewardsContext} from '../../context/rewards.context';

const RewardsView = () => {
  const {takenRewards} = useContext(RewardsContext);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={takenRewards}
        keyExtractor={index => index}
        renderItem={({item, index}) => <FeedItem item={item} />}
      />
    </View>
  );
};

export default RewardsView;
