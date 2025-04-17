import { useEffect } from "react";
import customAxios from "../api/api";
import { useAuth } from "./useAuth";

const renewToken = async () => {};
export const useCustomAxios = () => {
  const { auth } = useAuth();
  useEffect(() => {
    const requestInterceptor = customAxios.interceptors.request.use(
      async (config) => {
        const configCp = { ...config };
        const headers = config.headers;
        if (!headers.Authorization) {
          console.log({ auth });
          configCp.headers.Authorization = `Bearer ${auth?.token}`;
        }

        return configCp;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = customAxios.interceptors.response.use(
      async (response) => {
        const prevRequest = response.config.sent;
        if (response.status == "401" && !prevRequest.sent) {
          prevRequest.sent = true;
          try {
            const newToken = await renewToken();
            prevRequest.config.headers.Authorization = `Bearer ${newToken}`;
            return customAxios(prevRequest);
          } catch (error) {
            Promise.reject(error);
          }
        }
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      customAxios.interceptors.request.eject(requestInterceptor);
      customAxios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return customAxios;
};
