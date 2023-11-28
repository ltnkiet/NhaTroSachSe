const router = require("express").Router();
import * as controllers from '../controllers/category'


router.get('/all', controllers.getCategories)

export default router