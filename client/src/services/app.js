import axios from "../axiosConfig";
import axiosDefault from "axios";

export const apiGetPrices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "GET",
        url: "/price/all",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetAreas = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "GET",
        url: "/area/all",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetProvinces = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "GET",
        url: "/province/all",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetPublicProvinces = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "GET",
        url: "https://vapi.vnappmob.com/api/province/",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetPublicDistrict = (provinceId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "GET",
        url: `https://vapi.vnappmob.com/api/province/district/${provinceId}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetPublicWard = (districtId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "GET",
        url: `https://vapi.vnappmob.com/api/province/ward/${districtId}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
