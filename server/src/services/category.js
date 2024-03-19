import db from "../models";
const { Op } = require("sequelize");

export const getCategoriesService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        raw: true,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get categories.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getCategoriesByAdminService = (page, query) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;
      const response = await db.Category.findAndCountAll({
        where: { ...query },
        raw: true,
        nest: true,
        offset: offset * +process.env.lIMIT,
        limit: +process.env.lIMIT,
        order: [["createdAt", "DESC"]],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Lỗi hệ thống",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const createCategoriesService = ({ code, value, header, subheader }) =>
  new Promise(async (resolve, reject) => {
    try {
      const existingCategory = await db.Category.findOne({
        where: {
          [Op.or]: [{ code }, { value }],
        },
      });
      if (existingCategory) {
        resolve({
          err: 1,
          msg: "Danh mục đã tồn tại.",
        });
      } else {
        const newCategory = await db.Category.create({
          code,
          value,
          header,
          subheader,
        });
        resolve({
          err: 0,
          msg: "Tạo thành công.",
          category: newCategory ? newCategory : "",
        });
      }
    } catch (error) {
      reject(error);
    }
  });

export const deleteCategoriesService = (CateId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.destroy({
        where: { id: CateId },
      });
      resolve({
        err: response > 0 ? 0 : 1,
        msg: response > 0 ? "Đã xóa danh mục" : "Thất bại.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateCategoriesService = ({ cateId, ...payload }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.update(
        {
          code: payload.code,
          value: payload.value,
          header: payload.header,
          subheader: payload.subheader,
        },
        {
          where: { id: cateId },
        }
      );
      resolve({
        err: response[0] > 0 ? 0 : 1,
        msg: response[0] > 0 ? "Đã lưu" : "Lỗi",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
