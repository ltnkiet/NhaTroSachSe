const router = require("express").Router()
import * as postController from '../controllers/post'

router.get('/all', postController.getPosts)
router.get('/limit', postController.getPostsLimit)
router.get('/new-post', postController.getNewPosts)


export default router