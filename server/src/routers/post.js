const router = require("express").Router();
import * as postController from "../controllers/post";
const { verifyTokens, isAdmin } = require("../middlewares/verifyToken");

router.get("/", postController.getPostsLimit);

router.get("/new", postController.getNewPosts);
router.delete("/delete", verifyTokens, postController.deletePost);
router.post("/create", verifyTokens, postController.createPost);
router.get("/user/all", verifyTokens, postController.getPostByUser);
router.put("/user/update", verifyTokens, postController.updatePost);
router.get(
  "/admin/all",
  [verifyTokens, isAdmin],
  postController.getPostbyAdmin
);
router.put(
  "/admin/update",
  [verifyTokens, isAdmin],
  postController.changeStatusPost
);

router.get("/:id", postController.getPostDetail);

export default router;
