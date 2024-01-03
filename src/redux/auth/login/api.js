import { axiosClient } from "../../../config/axios";

export const loginApi = async (payload) => {
  const res = await axiosClient.post("/auth/login", payload);
  return res;
};
