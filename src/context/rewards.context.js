import React, {createContext, useEffect, useState} from 'react';

export const RewardsContext = createContext();

const RewardsContextProvider = ({children}) => {
  const [rewards, setRewards] = useState([]);
  const [loggedUser, setLoggedUser] = useState('');
  const [givenRewards, setGivenRewards] = useState([]);
  const [takenRewards, setTakenRewards] = useState([]);
  const [givenRewardsValue, setGivenRewardsValue] = useState(0);
  const [takenRewardsValue, setTakenRewardsValue] = useState(0);

  useEffect(() => {
    updateMyRewards();
    updateFeed();
  }, [rewards, loggedUser]);

  const addReward = data => {
    setRewards([...rewards, {...data}]);
  };

  const updateMyRewards = () => {
    const myRewards = rewards.filter(
      data => data.userName.toLowerCase() === loggedUser.toLowerCase(),
    );

    setTakenRewards(myRewards);

    const myRewardsVal = myRewards.reduce((total, value) => {
      return (total = total + value.amount);
    }, 0);

    setTakenRewardsValue(myRewardsVal);
  };

  const updateFeed = () => {
    const feed = rewards.filter(
      data => data.rewardedBy.toLowerCase() === loggedUser.toLowerCase(),
    );

    setGivenRewards(feed);

    const feedValue = feed.reduce((total, value) => {
      return (total = total + value.amount);
    }, 0);
    setGivenRewardsValue(feedValue);
  };

  return (
    <RewardsContext.Provider
      value={{
        rewards,
        addReward,
        loggedUser,
        setLoggedUser,
        givenRewards,
        takenRewards,
        givenRewardsValue,
        takenRewardsValue,
      }}>
      {children}
    </RewardsContext.Provider>
  );
};

export default RewardsContextProvider;
