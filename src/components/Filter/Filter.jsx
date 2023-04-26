export const Filter = ({ filter, onChange }) => {
  return (
    <select name="dropdown" id="dropdown" value={filter} onChange={onChange}>
      <option value="show all">Show all</option>
      <option value="follow">Follow</option>
      <option value="following">Following</option>
    </select>
  );
};
