import * as services from "../services/user";

export const getUser = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.getOne(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at category controller: " + error,
    });
  }
};

export const getAllUser = async (req, res) => {
  const { page, ...query } = req.query;
  const { id } = req.user;
  try {
    if (!id) {
      return res.status(400).json({
        err: 1,
        msg: "Require Auth",
      });
    }
    const response = await services.getAllUser(page, query);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at category controller: " + error,
    });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.user;
  const payload = req.body;
  try {
    if (!payload)
      return res.status(400).json({
        err: 1,
        msg: "Missing input",
      });
    const response = await services.updateInfor(id, payload);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at category controller: " + error,
    });
  }
};
