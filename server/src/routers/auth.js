const router = require("express").Router();
import * as authController from '../controllers/auth'

router.post('/register', authController.register)
router.post('/login', authController.login)
router.post("/password/forgot", authController.forgotPassword);
router.put("/password/reset", authController.resetPassword);

export default router;
