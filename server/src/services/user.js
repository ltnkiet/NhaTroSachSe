import db from "../models";

// GET CURRENT
export const getOne = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { id },
        raw: true,
        attributes: {
          exclude: ["password"],
        },
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get provinces.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getAllUser = (page, query) => 
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;
      const queries = { ...query, role: "0" };
      const response = await db.User.findAndCountAll({
        where: queries,
        raw: true,
        nest: true,
        offset: offset * +process.env.lIMIT,
        limit: +process.env.lIMIT,
        attributes: { exclude: ["password"] },
        order: [["createdAt", "DESC"]],
      })
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Getting User is failed.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  })

export const updateInfor = (id, payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.update(payload, {
        where: { id }
      });
      resolve({
        err: response[0] > 0 ? 0 : 1,
        msg: response[0] > 0 ? "Đã lưu thông tin" : "Lỗi",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
