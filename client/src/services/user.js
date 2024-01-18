import axios from "../axiosConfig";

export const apiGetUser = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "GET",
        url: "/user",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiUpdateUser = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "PUT",
        url: "/user",
        data: payload
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
