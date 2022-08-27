const { Router } = require('express')
const router = Router()
const posts = require('./post')
const users = require('./users')


router.use('/users', users)
router.use('/posts', posts)

module.exports = router