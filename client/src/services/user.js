import axios from "../axiosConfig";

export const apiGetUser = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/v1/user",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
