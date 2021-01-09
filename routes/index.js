const {Router} = require('express')
// const httpResponseCodes = require('http-response-codes')
// const HttpCodes = require('http-status-codes')

const router = Router()

const {getFruits, postFruits, patchFruits, deleteFruits} = require('../controller')

router.get('/fruit', getFruits)

router.post('/fruit', postFruits)

router.patch('/fruit', patchFruits)

router.delete('/fruit', deleteFruits)

module.exports = router