import { AxiosError } from "axios";
import { _get } from "./methods";

export const login = (form: {
  phone: string;
  password: string;
}): Promise<any> => {
  return _get("/login/cellphone", {
    params: {
      phone: form?.phone,
      password: form?.password,
    },
  })
    .then((data: any) => Promise.resolve(data))
    .catch((err: AxiosError) => Promise.reject(err));
};

export const getLoginStatus = (): Promise<any> => {
  return _get("/login/status")
    .then((data: any) => {
      return Promise.resolve(data);
    })
    .catch((err: AxiosError) => {
      return Promise.reject(err);
    });
};
