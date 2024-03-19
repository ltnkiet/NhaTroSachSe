import * as services from "../services/category";

export const getCategories = async (req, res) => {
  try {
    const response = await services.getCategoriesService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at category controller: " + error,
    });
  }
};

export const createCategories = async (req, res) => {
  try {
    const { code, value, header, subheader } = req.body;
    if (!code || !value || !header || !subheader)
      return res.status(400).json({
        err: 1,
        msg: "Missing inputs !",
      });
    const response = await services.createCategoriesService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at category controller: " + error,
    });
  }
};

export const deleteCategories = async (req, res) => {
  const { cateId } = req.query;
  const { id } = req.user;
  try {
    if (!cateId || !id) {
      return res.status(400).json({
        err: 1,
        msg: "Không tìm thấy id",
      });
    }
    const response = await services.deleteCategoriesService(cateId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller: " + error,
    });
  }
};

export const getCategoryByAdmin = async (req, res) => {
  const { page, ...query } = req.query;
  const { id } = req.user;
  try {
    if (!id) {
      return res.status(400).json({
        err: 1,
        msg: "Require Auth",
      });
    }
    const response = await services.getCategoriesByAdminService(page, query);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller: " + error,
    });
  }
};

export const updateCategory = async (req, res) => {
  const { cateId, ...payload } = req.body;
  const { id } = req.user;
  try {
    if (!cateId || !id)
      return res.status(400).json({
        err: 1,
        msg: "Missing input",
      });
    const response = await services.updateCategoriesService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at category controller: " + error,
    });
  }
};
