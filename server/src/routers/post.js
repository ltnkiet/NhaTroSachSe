const router = require("express").Router()
import * as postController from '../controllers/post'
import { verifyTokens, isAdmin } from "../middlewares/verifyToken";

// router.get('/all', postController.getPosts)
router.get('/limit', postController.getPostsLimit)

router.get('/new', verifyTokens, postController.getNewPosts)
router.post('/create', verifyTokens, postController.createPost)
router.get('/user/all', verifyTokens, postController.getPostByUser)
router.put('/user/update', verifyTokens, postController.updatePost)
router.get('/admin/all', [verifyTokens, isAdmin], postController.getPostbyAdmin)





export default router