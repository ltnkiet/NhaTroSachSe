const router = require("express").Router();
import * as controllers from '../controllers/price'
// CRUD

router.get('/all', controllers.getPrices)

export default router