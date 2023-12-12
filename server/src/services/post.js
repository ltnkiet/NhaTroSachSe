import db from "../models";
const { Op } = require("sequelize");

export const getPostsServiceByAdmin = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest: true,
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage"],
          },
          { model: db.User, as: "user", attributes: ["name", "zalo", "phone"] },
        ],
        attributes: ["id", "title", "star", "address", "description"],
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

export const getPostsLimitService = ( page, query, { priceNumber, areaNumber }) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;
      const queries = { ...query, status: 'active' };
      if (priceNumber) queries.priceNumber = { [Op.between]: priceNumber };
      if (areaNumber) queries.areaNumber = { [Op.between]: areaNumber };
      const response = await db.Post.findAndCountAll({
        where: queries,
        raw: true,
        nest: true,
        offset: offset * +process.env.LIMIT,
        limit: +process.env.LIMIT,
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage"],
          },
          { model: db.User, as: "user", attributes: ["name", "zalo", "phone"] },
        ],
        attributes: ["id", "title", "address", "description"],
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
        where: {status: 'active'},
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
        attributes: ["id", "title", "createdAt"],
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

export const createPostService = (body, user_id) => 
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.create({
        raw: true,
        nest: true,
        offset: 0,
        order: [['createdAt', 'DESC']],
        include: [
          {model: db.Image, as: 'images', attribute: ['image']},
          {model: db.Attribute, as: 'attributes', attribute: ['price', 'acreage']}
        ],
        attribute: ['id', 'title', 'star', 'createdAt']
      })
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'Created post successfully' : 'Create post failed',
        response
      })
    } catch (error) {
      reject(error)
    }
  })
