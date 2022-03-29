// @ts-ignore
const {Router} = require('express')
const QuizzesRouter = require('./quizzes/')

// @ts-ignore
const router = new Router()

// @ts-ignore
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quizzes', QuizzesRouter)

module.exports = router
