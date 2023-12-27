import axiosConfig from "../axiosConfig";

export const apiRegister = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/api/v1/auth/register",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiLogin = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/api/v1/auth/login",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });

export const apiForgotPassword = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/api/v1/auth/password/forgot",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });

export const apiResetPassword = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: "/api/v1/auth/password/reset",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });
