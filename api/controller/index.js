// @ts-ignore
const {Router} = require('express')
const QuizzesRouter = require('./quizzes/')
const ProfileRouter = require('./profile/')
const QuizzesHistoryRouter = require('./quizzesHistory/')

// @ts-ignore
const router = new Router()

// @ts-ignore
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quizzes', QuizzesRouter)
router.use('/profiles', ProfileRouter)
router.use('/quizzesHistory', QuizzesHistoryRouter)
router.use('/quizzesHistory', QuizzesHistoryRouter)

module.exports = router
