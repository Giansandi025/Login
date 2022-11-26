const express = require('express')
const router = express.Router()
const {ProfileController} = require('./../controller/editProfile')



router.put('/:id',ProfileController.update)

module.exports = router;
