import axiosConfig from "../axiosConfig";

export const apiRegister = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/auth/register",
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
        url: "/auth/login",
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
        url: "/auth/password/forgot",
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
        url: "/auth/password/reset",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });
