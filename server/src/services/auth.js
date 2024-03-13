import db from "../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 } from "uuid";
import crypto from "crypto";
const { Op } = require("sequelize");
require("dotenv").config();

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const registerService = ({ phone, password, name, email }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { [Op.or]: [{ phone }, { email }] },
        defaults: {
          phone,
          email,
          name,
          password: hashPassword(password),
          id: v4(),
        },
      });
      const token =
        response[1] &&
        jwt.sign(
          { id: response[0].id, phone: response[0].phone },
          process.env.TOKEN_SECRET_KEY,
          { expiresIn: "2d" }
        );
      resolve({
        err: token ? 0 : 1,
        msg: token
          ? "Đăng ký hoàn tất !"
          : "Số điện thoại hoặc Email này đã tồn tại!",
        token: token || null,
      });
    } catch (error) {
      reject(error);
    }
  });

export const loginService = ({ phone, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { phone },
        raw: true,
      });
      const isCorrectPassword = response && bcrypt.compareSync(password, response.password);
      const token = isCorrectPassword &&
        jwt.sign(
          { id: response.id, phone: response.phone },
          process.env.TOKEN_SECRET_KEY,
          { expiresIn: "2d" }
        );
      resolve({
        role: response.role,
        err: token ? 0 : 1,
        msg: token
          ? "Đăng nhập thành công !"
          : response
          ? "Mật khẩu không đúng !"
          : "Số điện thoại không tồn tại!",
        token: token || null,
      });
    } catch (error) {
      reject(error);
    }
  });

export const forgotPasswordService = (email) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { email },
      });
      if (!response) {
        resolve({
          err: 1,
          msg: "Email này chưa được đăng ký",
        });
      } else {
        const resetToken = crypto.randomBytes(32).toString("hex");
        response.passwordResetToken = resetToken;
        response.passwordResetExpires = Date.now() + 5 * 60 * 1000; //thời gian token: 5p
        await response.save();
        resolve({
          err: 0,
          passwordResetToken: resetToken,
          msg: "Tin nhắn đã được gửi đến email của bạn",
        });
      }
    } catch (error) {
      reject(error);
    }
  });

export const resetPasswordService = (password, token) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: {
          passwordResetToken: token,
          passwordResetExpires: { [Op.gt]: Date.now() },
        },
      });
      if (!response) {
        resolve({
          err: 1,
          msg: "Bạn đã hết thời hạn thay đổi mật khẩu, vui lòng thử lại!",
        });
      } else {
        response.password = hashPassword(password);
        response.passwordResetToken = null;
        response.passwordChangedAt = Date.now();
        response.passwordResetExpires = null;
        await response.save();
        resolve({
          err: 0,
          msg: "Đổi mật khẩu thành công",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
