import axiosConfig from "../axiosConfig";

export const apiGetCategories = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/category/all",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiCreateCategories = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/category",
        data,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetCategoriesAdmin = (query) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/category/admin",
        params: query,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiUpdateCategories = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: "/category/admin",
        data,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiDeleteCategories = (cateId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "DELETE",
        url: "/category",
        params: { cateId },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
