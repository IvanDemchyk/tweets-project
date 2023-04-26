import axios from "axios";

axios.defaults.baseURL = "https://64316fd8d4518cfb0e6169d4.mockapi.io/";

export const getUsers = async (page = 1) => {
  const response = await axios.get(`users?page=${page}&limit=4`);
  return response.data;
};

export const followTweet = async (id, body) => {
  const response = await axios.put(`users/${id}`, body);
  return response.data;
};

export const updateUser = async (id) => {
  const response = await axios.get(`users/${id}`);
  return response.data;
};
