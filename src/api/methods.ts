import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { URL_PREFIX } from "./constants";

axios.defaults.baseURL = URL_PREFIX;
axios.defaults.withCredentials = true;

type GetConfig<Data> = Omit<
  AxiosRequestConfig<Data>,
  "method" | "baseURL" | "url"
>;

export const _get = <Data>(
  url: string,
  config?: GetConfig<Data>
): Promise<any> => {
  return axios({
    url,
    method: "GET",
    ...config,
  })
    .then((res) => Promise.resolve(res?.data))
    .catch((err: AxiosError) => Promise.reject(err));
};
