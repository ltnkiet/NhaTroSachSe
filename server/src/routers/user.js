const router = require("express").Router();
import { verifyTokens, isAdmin } from "../middlewares/verifyToken";
import * as userController from "../controllers/user";

router.get("/", verifyTokens, userController.getUser);
router.put("/", verifyTokens, userController.updateUser);
router.get("/all", [verifyTokens, isAdmin], userController.getAllUser);

export default router;
