const router = require("express").Router()
import * as postController from '../controllers/post'
import { verifyTokens, isAdmin } from "../middlewares/verifyToken";

// router.get('/all', postController.getPosts)
router.get('/limit', postController.getPostsLimit)

router.get('/new-post', verifyTokens, postController.getNewPosts)
router.post('/create-post', verifyTokens, postController.createPost)
router.get('/all/user', verifyTokens, postController.getPostByUser)
router.get('/all/admin', [verifyTokens, isAdmin], postController.getPostbyAdmin)





export default router