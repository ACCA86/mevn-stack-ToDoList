const {Router} = require('express')
const router = Router()
const api = require('../controllers/api.js')

router.get('/',api.fetchAllPost)
router.get('/:id',api.fetchSinglePost)
router.post('/',api.createPost)
router.patch('/:id',api.updatePost)
router.delete('/:id',api.deletePost)

module.exports = router