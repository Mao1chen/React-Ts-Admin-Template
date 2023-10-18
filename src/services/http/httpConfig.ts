import { $localSave, useMessage } from "@/utils";
import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import service_resource from "./resoureceConfig";

enum ResponseStatus {
  SUCCESS = 200,
  EXCEPTION = 1,
  NOTCARYY = 500,
}

const serviceInstance: AxiosInstance = axios.create({
  baseURL: service_resource,
  timeout: 5000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json; charset=UTF-8",
  },
});

serviceInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const verification: string | null = $localSave.gain("verification");
  if (!!verification) {
    config.headers![`Authorization`] = verification;
  }
  return config;
});

serviceInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const {
      data: { code, data: information = {} || [], msg },
    }: any = response as unknown as API.ResponseStructure;

    switch (code) {
      case ResponseStatus.SUCCESS:
        return information;
      case ResponseStatus.NOTCARYY: // 退出系统后台代码
        // 退出登录逻辑
        break;
      default:
        return Promise.reject({ message: msg });
    }
  },
  (exception: AxiosError) => {
    useMessage.error("网络超时");
    return Promise.reject(exception);
  }
);

export default serviceInstance;
