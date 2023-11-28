const router = require("express").Router();
import * as controllers from '../controllers/province'
// CRUD
router.get('/all', controllers.getProvinces)

export default router