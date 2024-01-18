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
