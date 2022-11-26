const express = require('express')
const router = express.Router()
const UsersRouter = require("./../routes/usersPekerja")
const ProfileRouter = require("./../routes/profile")

router
.use('/users', UsersRouter )
.use('/profile', ProfileRouter)


module.exports = router
