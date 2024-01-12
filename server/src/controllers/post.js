import * as postService from "../services/post";

export const getPostbyAdmin= async (req, res) => {
  const { page, ...query } = req.body;
  try {
    const response = await postService.getPostsByAdminService(page, query);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,  
      msg: "Failed at post controller: " + error,
    });
  }
};

export const getPostByUser = async (req, res) => {
  const { page, ...query } = req.query;
  const { id } = req.user;
  try {
    if (!id) {
      return res.status(400).json({
        err: 1,
        msg: "Require Auth",
      });
    }
    const response = await postService.getPostByUserService(page, id, query);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller: " + error,
    });
  }
};

export const getPostsLimit = async (req, res) => {
  const { page, priceNumber, areaNumber, ...query } = req.query;
  try {
    const response = await postService.getPostsLimitService(page, query, {
      priceNumber,
      areaNumber,
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller: " + error,
    });
  }
};

export const getNewPosts = async (req, res) => {
  try {
    const response = await postService.getNewPostService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller: " + error,
    });
  }
};

export const createPost = async (req, res) => {
  try {
    const { categoryCode, title, priceNumber, areaNumber, label } = req.body;
    const { id } = req.user;
    if (!id || !categoryCode || !title || !priceNumber || !areaNumber || !label)
      return res.status(400).json({
        err: 1,
        msg: "Missing Input",
      });
    const response = await postService.createPostService(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller: " + error,
    });
  }
};

export const updatePost = async (req, res) => {
  const { postId, attributesId, overviewId, imagesId, ...payload } = req.body;
  const { id } = req.user;
  try {
    if (!postId || !id || !attributesId || !overviewId || !imagesId) {
      return res.status(400).json({
        err: 1,
        msg: "Không tìm thấy id",
      });
    }
    const response = await postService.updatePostService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller: " + error,
    });
  }
}