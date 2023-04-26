import { TweetItem } from "components/TweetItem/TweetItem";

import { List } from "./TweetList.styled";

export const TweetsList = ({ users }) => {
  return (
    <List>
      {users.map((user) => (
        <li key={user.id}>
          <TweetItem user={user} />
        </li>
      ))}
    </List>
  );
};
