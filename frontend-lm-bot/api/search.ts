import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  maxBodyLength: Infinity,
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

export const aiSearch = async (msg: string) => {
  try {
    const response = await axios.post("/chat", { msg }, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
