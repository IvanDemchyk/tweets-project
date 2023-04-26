import { useEffect, useState } from "react";
import { NumberFormat } from "services/number-format";
import { followTweet } from "services/tweets-api";

import {
  TweetBox,
  AvatarImg,
  StatsBox,
  StatsText,
  TweetButton,
} from "./TweetItem.styled";

export const TweetItem = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(user.following);
  const [followers, setFollowers] = useState(user.followers);

  useEffect(() => {
    const stored = localStorage.getItem(`user-${user.id}`);
    if (stored) {
      setIsFollowing(JSON.parse(stored));
    }
  }, [user.id]);

  useEffect(() => {
    localStorage.setItem(`user-${user.id}`, isFollowing);
  }, [isFollowing, user.id]);

  const updateTweet = async (toggleFollowing, toggleFollowers) => {
    try {
      const update = {
        ...user,
        followers: toggleFollowers,
        following: toggleFollowing,
      };
      await followTweet(user.id, update);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleButton = () => {
    const toggleFollowing = !isFollowing;
    const toggleFollowers = toggleFollowing ? followers + 1 : followers - 1;

    setIsFollowing(toggleFollowing);
    setFollowers(toggleFollowers);
    updateTweet(toggleFollowing, toggleFollowers);
  };

  const { avatar, tweets } = user;

  return (
    <TweetBox>
      <AvatarImg src={avatar} alt={user} />
      <StatsBox>
        <StatsText>{tweets} TWEETS</StatsText>
        <StatsText>{NumberFormat(followers)} FOLLOWERS</StatsText>
      </StatsBox>

      <TweetButton isfollowing={isFollowing.toString()} onClick={toggleButton}>
        {isFollowing ? "Following" : "Follow"}
      </TweetButton>
    </TweetBox>
  );
};
