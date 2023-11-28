const router = require("express").Router();
import * as controllers from '../controllers/area'
// CRUD
router.get('/all', controllers.getAreas)

export default router