import axiosConfig from "../axiosConfig";
import axios from "axios";

export const apiGetPostByUser = (query) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/post/user/all",
        params: query,

      });
      resolve(response?.data);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetPostsLimit = (query) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/post/limit`,
        params: query,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetNewPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/post/new`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiUploadImages = (images) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "POST",
        url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload/`,
        data: images,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiCreatePost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: `/post/create`,
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiUpdatePost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: `/post/user/update`,
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiDeletePost = (postId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "DELETE",
        url: `/post/delete`,
        params: { postId }
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
