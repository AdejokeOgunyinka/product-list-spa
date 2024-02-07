import { axiosInstance } from "./axiosInstance";

export const getProducts = async () => {
  const res = await axiosInstance.get("/products");
  return res.data;
};
