import * as authService from "../services/auth";
const sendMail = require('../utils/sendMail')

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
  const { email } = req.query;
  try {
    if (!email) {
      return res.status(400).json({
        err: 1,
        msg: "Missing Email",
      });
    }
    const response = await authService.forgotPasswordService(email);
    if (response.err === 0) {
      const resetToken = response.passwordResetToken;
      const html = `<p>Chọn vào đây để thay đổi mật khẩu: <a href="#">${resetToken}</a></p>`;
      await sendMail({ email, html });
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
