const router = require("express").Router();
import { verifyTokens } from "../middlewares/verifyToken";
import * as userController from "../controllers/user";

router.get("/get-current", verifyTokens, userController.getCurrent);

export default router;
