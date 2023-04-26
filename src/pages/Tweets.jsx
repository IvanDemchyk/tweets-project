import { Filter } from "components/Filter/Filter";
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
  const [filter, setFilter] = useState("show all");
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

  const filterUsers = (user) => {
    switch (filter) {
      case "show all":
        return true;
      case "follow":
        return !user.following;
      case "following":
        return user.following;
      default:
        return false;
    }
  };

  const changeFilter = (evt) => {
    setFilter(evt.target.value);
  };
  console.log(filter);
  const filteredUsers = users.filter(filterUsers);
  console.log(filteredUsers);

  return (
    <div>
      <Link to={backLink}>Back</Link>
      <Filter value={filter} onChange={changeFilter} />
      {isLoading && "Loading..."}
      {error && <div>{error}</div>}
      {users && <TweetsList users={filteredUsers} />}
      <LoadButton onClick={getMoreUsers} />
    </div>
  );
};
export default Tweets;
