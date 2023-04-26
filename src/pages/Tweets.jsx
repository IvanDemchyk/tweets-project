import { LoadButton } from "components/LoadButton/LoadButton";
import { TweetsList } from "components/TweetsList/TweetsList";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import { getUsers } from "services/tweets-api";

let page = 1;

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLink = location?.state?.from ?? "/";

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

  const getMoreUsers = async () => {
    try {
      const users = await getUsers((page += 1));
      setUsers((prev) => [...prev, ...users]);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <Link to={backLink}>Back</Link>
      {isLoading && "Loading..."}
      {error && <div>{error}</div>}
      {users && <TweetsList users={users} />}
      <LoadButton onClick={getMoreUsers} />
    </div>
  );
};
export default Tweets;
