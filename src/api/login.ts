import { AxiosError, AxiosResponse } from "axios";
import { _get, _genSuffix } from "./methods";

export const login = (form: {
  phone: string;
  password: string;
}): Promise<AxiosResponse> => {
  return _get(`/login/cellphone?${_genSuffix()}`, {
    params: {
      phone: form?.phone,
      password: form?.password,
    },
  })
    .then((data: AxiosResponse) => Promise.resolve(data))
    .catch((err: AxiosError) => Promise.reject(err));
};

export const logout = (): Promise<AxiosResponse> => {
  return _get("/logout")
    .then((data: AxiosResponse) => Promise.resolve(data))
    .catch((err: AxiosError) => Promise.reject(err));
};

export const getLoginStatus = (): Promise<AxiosResponse> => {
  return _get(`/login/status?${_genSuffix()}`)
    .then((data: AxiosResponse) => Promise.resolve(data))
    .catch((err: AxiosError) => Promise.reject(err));
};
