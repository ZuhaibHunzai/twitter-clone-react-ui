import { axiosClient } from "../../config/axios";

export const getUserDataApi = async (payload) => {
  const res = await axiosClient.get(`/user/${payload}`);
  return res.data;
};
