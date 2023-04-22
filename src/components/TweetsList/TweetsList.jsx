import { TweetItem } from "components/TweetItem/TweetItem";

export const TweetsList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <TweetItem key={user.id} user={user} />
      ))}
    </ul>
  );
};
