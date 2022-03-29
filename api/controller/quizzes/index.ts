// @ts-ignore
const { Router } = require('express')

// @ts-ignore
const {Quiz} = require('../../models/quiz.model.ts')

// @ts-ignore
const router = new Router()

// @ts-ignore
router.get('/status', (req, res) => res.status(200).json('ok'))

// @ts-ignore
router.get('/', (req, res) => {
  try {
    const quizzes = Quiz.get()
    /*quizzes.forEach((q) => {
      // eslint-disable-next-line no-param-reassign
      q.questions = filterQuestion(q.id)
    })*/
    res.status(200).json(quizzes)
  } catch (err) {
    res.status(500).json(err)
  }
})

// @ts-ignore
router.post('/', (req, res) => {
  try {
    const quiz = Quiz.create({ ...req.body })
    res.status(201).json(quiz)
  } catch (err) {
    // @ts-ignore
    if (err.name === 'ValidationError') {
      // @ts-ignore
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
})

module.exports = router
