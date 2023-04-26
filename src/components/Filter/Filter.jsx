import { Select, Option } from "./Filter.syled";

export const Filter = ({ filter, onChange }) => {
  return (
    <Select name="dropdown" id="dropdown" value={filter} onChange={onChange}>
      <Option value="show all">Show all</Option>
      <Option value="follow">Follow</Option>
      <Option value="following">Following</Option>
    </Select>
  );
};
