const router = require("express").Router()
import * as postController from '../controllers/post'
import { verifyTokens } from "../middlewares/verifyToken";

router.get('/all', postController.getPosts)
router.get('/limit', postController.getPostsLimit)
router.get('/new-post', verifyTokens, postController.getNewPosts)
router.post('/create-post', verifyTokens, postController.createPost)



export default router