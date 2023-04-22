import { TweetsList } from "components/TweetsList/TweetsList";
import { useState, useEffect } from "react";

import { getUsers } from "services/tweets-api";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchUsers = async () => {
      try {
        const result = await getUsers();
        setUsers(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  console.log(getUsers());

  return (
    <div>
      {isLoading && "Loading..."}
      {error && <div>{error}</div>}
      {users && <TweetsList users={users} />}
    </div>
  );
};
export default Tweets;
