export const TweetItem = ({ user }) => {
  return (
    <li>
      <img src={user.avatar} alt={user.user} />
      <p>{user.tweets} TWEETS</p>
      <p>{user.followers} FOLLOWERS</p>
    </li>
  );
};
