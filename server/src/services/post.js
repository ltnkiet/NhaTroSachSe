import db from "../models";
import { v4 } from "uuid";
import generateCode from "../utils/generateCode";
const { Op } = require("sequelize");

export const getPostsByAdminService = (page, query) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;
      const response = await db.Post.findAndCountAll({
        where: { ...query },
        raw: true,
        nest: true,
        offset: offset * +process.env.lIMIT,
        limit: +process.env.lIMIT,
        order: [["createdAt", "DESC"]],
        include: [
          { model: db.Image, as: "images" },
          { model: db.Attribute, as: "attributes" },
          { model: db.User, as: "user" },
          { model: db.Overview, as: "overviews" },
        ],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Getting posts is failed.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getPostByUserService = (page, id, query) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;
      const queries = { ...query, userId: id };
      const response = await db.Post.findAndCountAll({
        where: queries,
        raw: true,
        nest: true,
        offset: offset * +process.env.LIMIT,
        limit: +process.env.LIMIT,
        order: [["createdAt", "DESC"]],
        include: [
          { model: db.Image, as: "images" },
          { model: db.Attribute, as: "attributes" },
          { model: db.User, as: "user" },
          { model: db.Overview, as: "overviews" },
        ],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Getting posts is failed.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getPostsDetailService = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findOne({
        where: { id },
        raw: true,
        nest: true,
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage"],
          },
          {
            model: db.User,
            as: "user",
            attributes: ["name", "zalo", "phone", "avatar", "fbUrl"],
          },
          { model: db.Overview, as: "overviews", attributes: ["area", "type"] },
        ],
        attributes: [
          "id",
          "title",
          "address",
          "description",
          "createdAt",
          "status",
        ],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Getting posts is failed.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getPostsLimitService = (
  page,
  { limitPost, order, ...query },
  { priceNumber, areaNumber }
) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;
      const queries = { ...query };
      const limit = +limitPost || +process.env.LIMIT;
      queries.limit = limit;
      if (priceNumber) query.priceNumber = { [Op.between]: priceNumber };
      if (areaNumber) query.areaNumber = { [Op.between]: areaNumber };
      if (order) queries.order = [order];
      const response = await db.Post.findAndCountAll({
        where: { ...query, status: "active" },
        raw: true,
        nest: true,
        offset: offset * limit,
        ...queries,
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage"],
          },
          {
            model: db.User,
            as: "user",
            attributes: ["name", "zalo", "phone", "avatar", "fbUrl"],
          },
          { model: db.Overview, as: "overviews", attributes: ["area", "type"] },
        ],
        attributes: [
          "id",
          "title",
          "address",
          "description",
          "createdAt",
          "status",
        ],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Getting posts is failed.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getNewPostService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        where: { status: "active" },
        raw: true,
        nest: true,
        offset: 0,
        order: [["createdAt", "DESC"]],
        limit: +process.env.LIMIT,
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage"],
          },
        ],
        attributes: ["id", "title", "status", "createdAt"],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Getting posts is failed.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const createPostService = (userId, body) =>
  new Promise(async (resolve, reject) => {
    try {
      const attributesId = v4();
      const imagesId = v4();
      const overviewId = v4();
      const labelCode = generateCode(body.label);
      await db.Post.create({
        id: v4(),
        title: body.title,
        labelCode,
        address: body.address || null,
        attributesId,
        categoryCode: body.categoryCode,
        description: JSON.stringify(body.description) || null,
        userId,
        overviewId,
        imagesId,
        areaCode: body.areaCode || null,
        priceCode: body.priceCode || null,
        provinceCode: body?.province?.includes("Thành phố")
          ? generateCode(body?.province?.replace("Thành phố ", ""))
          : generateCode(body?.province?.replace("Tỉnh ", "")) || null,
        priceNumber: body.priceNumber,
        areaNumber: body.areaNumber,
      });
      await db.Attribute.create({
        id: attributesId,
        price:
          +body.priceNumber < 1
            ? `${body.priceNumber * 1000000} đồng/tháng`
            : `${body.priceNumber} triệu/tháng`,
        acreage: `${body.areaNumber}m2`,
      });
      await db.Image.create({
        id: imagesId,
        image: JSON.stringify(body.images),
      });
      await db.Overview.create({
        id: overviewId,
        area: body.label,
        type: body?.category,
      });
      await db.Province.findOrCreate({
        where: {
          [Op.or]: [
            { value: body?.province?.replace("Tỉnh ", "") },
            { value: body?.province?.replace("Thành phố ", "") },
          ],
        },
        defaults: {
          code: body?.province?.includes("Thành phố")
            ? generateCode(body?.province?.replace("Thành phố ", ""))
            : generateCode(body?.province?.replace("Tỉnh ", "")),
          value: body?.province?.includes("Thành phố")
            ? body?.province?.replace("Thành phố ", "")
            : body?.province?.replace("Tỉnh ", ""),
        },
      });
      await db.Label.findOrCreate({
        where: {
          code: labelCode,
        },
        defaults: {
          code: labelCode,
          value: body.label,
        },
      });
      resolve({
        err: 0,
        msg: "Tạo bài đăng thành công, hãy chờ được duyệt",
      });
    } catch (error) {
      reject(error);
    }
  });

export const updatePostService = ({
  postId,
  attributesId,
  overviewId,
  imagesId,
  ...body
}) =>
  new Promise(async (resolve, reject) => {
    try {
      const labelCode = generateCode(body.label);
      await db.Post.update(
        {
          title: body.title,
          labelCode,
          address: body.address || null,
          categoryCode: body.categoryCode,
          description: JSON.stringify(body.description) || null,
          areaCode: body.areaCode || null,
          priceCode: body.priceCode || null,
          provinceCode: body?.province?.includes("Thành phố")
            ? generateCode(body?.province?.replace("Thành phố ", ""))
            : generateCode(body?.province?.replace("Tỉnh ", "")) || null,
          priceNumber: body.priceNumber,
          areaNumber: body.areaNumber,
        },
        {
          where: { id: postId },
        }
      );
      await db.Attribute.update(
        {
          price:
            +body.priceNumber < 1
              ? `${body.priceNumber * 1000000} đồng/tháng`
              : `${body.priceNumber} triệu/tháng`,
          acreage: `${body.areaNumber}m2`,
        },
        {
          where: { id: attributesId },
        }
      );
      await db.Image.update(
        {
          image: JSON.stringify(body.images),
        },
        {
          where: { id: imagesId },
        }
      );
      await db.Overview.update(
        {
          area: body.label,
          type: body?.category,
        },
        {
          where: { id: overviewId },
        }
      );
      await db.Province.findOrCreate({
        where: {
          [Op.or]: [
            { value: body?.province?.replace("Tỉnh ", "") },
            { value: body?.province?.replace("Thành phố ", "") },
          ],
        },
        defaults: {
          code: body?.province?.includes("Thành phố")
            ? generateCode(body?.province?.replace("Thành phố ", ""))
            : generateCode(body?.province?.replace("Tỉnh ", "")),
          value: body?.province?.includes("Thành phố")
            ? body?.province?.replace("Thành phố ", "")
            : body?.province?.replace("Tỉnh ", ""),
        },
      });
      await db.Label.findOrCreate({
        where: {
          code: labelCode,
        },
        defaults: {
          code: labelCode,
          value: body.label,
        },
      });
      resolve({
        err: 0,
        msg: "Cập nhật bài viết thành công",
      });
    } catch (error) {
      reject(error);
    }
  });

export const changeStatusPostService = (sts, postId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.update(
        { status: sts },
        { where: { id: postId } }
      );
      resolve({
        err: 0,
        msg: "Đã thay đổi trạng thái thành hoạt động",
      });
    } catch (error) {
      reject(error);
    }
  });

export const deletePostService = (postId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.destroy({
        where: { id: postId },
      });
      resolve({
        err: response > 0 ? 0 : 1,
        msg: response > 0 ? "Đã xóa bài viết của bạn" : "Thất bại.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
