const router = require("express").Router();
import * as controllers from "../controllers/category";
const { verifyTokens, isAdmin } = require("../middlewares/verifyToken");

router.get("/all", controllers.getCategories);
router.get("/admin", [verifyTokens, isAdmin], controllers.getCategoryByAdmin);
router.put("/admin", [verifyTokens, isAdmin], controllers.updateCategory);
router.post("/", [verifyTokens, isAdmin], controllers.createCategories);
router.delete("/", [verifyTokens, isAdmin], controllers.deleteCategories);

export default router;
