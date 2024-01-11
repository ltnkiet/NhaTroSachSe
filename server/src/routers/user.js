const router = require("express").Router();
import { verifyTokens } from "../middlewares/verifyToken";
import * as userController from "../controllers/user";

router.get("/", verifyTokens, userController.getUser);

export default router;
