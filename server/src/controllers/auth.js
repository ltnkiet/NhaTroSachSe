import * as authService from "../services/auth";
import crypto from "crypto";
const sendMail = require("../utils/sendMail");

export const register = async (req, res) => {
  const { name, phone, password, email } = req.body;
  try {
    if (!name || !phone || !password || !email)
      return res.status(400).json({
        err: 1,
        msg: "Missing inputs !",
      });
    const response = await authService.registerService(req.body); 
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at auth controller: " + error,
    });
  }
};

export const login = async (req, res) => {
  const { phone, password } = req.body;
  try {
    if (!phone || !password)
      return res.status(400).json({
        err: 1,
        msg: "Missing inputs !",
      });
    const response = await authService.loginService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at auth controller: " + error,
    });
  }
};
export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).json({
        err: 1,
        msg: "Email không được bỏ trống",
      });
    }
    const response = await authService.forgotPasswordService(email);
    if (response.err === 0) {
      const resetToken = response.passwordResetToken;
      const html = `
        <p style=" font-weight: 500; font-size: 14px">
          Bạn nhận được email này vì bạn hoặc ai đó đã yêu cầu lấy lại mật khẩu
        </p>
        <p style="font-weight: 500; font-size: 14px">
          Chọn vào đây để lấy lại mật khẩu, yêu cầu này sẽ mất hiệu lực sau 15 phút:
        </p>
        <button style="padding: 14px; background-color: #181460; border-radius: 5px; border-style: none; cursor: pointer">
          <a href=${process.env.CLIENT_URL}/mat-khau/thay-doi/${resetToken}
            style="color:white; text-decoration-line: none; font-size: 14px; font-weight: 700">
            Cập nhật mật khẩu
          </a>
        </button>
        <p style= font-weight: 500; font-size: 14px">Nếu bạn không yêu cầu đặt lại mật khẩu, 
        thì có thể bỏ qua email này</p>
        <p style="font-weight: 500; font-size: 14px">Cảm ơn bạn, </p>
        <p style="font-weight: 500; font-size: 14px">Nhà Trọ Sạch Sẽ Support Team!</p>
        <img src="https://res.cloudinary.com/ltnkiet/image/upload/v1703661380/nhatrosachse/logo_ntss_tezyvz.png" 
          style="width: 20rem; border-radius: 5px;" alt="thumbnail">
      `;
      await sendMail({
        email,
        html,
        subject: "[Nhà Trọ Sạch Sẽ] Password Reset E-Mail",
      });
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at auth controller: " + error,
    });
  }
};
export const resetPassword = async (req, res) => {
  const { password, token } = req.body;
  try {
    if (!password || !token) {
      return res.status(400).json({
        err: 1,
        msg: "Missing Input",
      });
    }
    const response = await authService.resetPasswordService(password, token);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at auth controller: " + error,
    });
  }
};
