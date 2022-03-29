const { Router } = require('express')

const { Quiz } = require('../../models')

const questionRouter = require('./questions/index')

const { filterQuestion } = require("./questions/manager");

const router = new Router()

router.use('/:quizId/questions', questionRouter)

router.get('/', (req, res) => {
  try {
    const quizzes = Quiz.get()
    quizzes.forEach((q) => {
      q.questions = filterQuestion(q.id)
    })
    res.status(200).json(quizzes)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:quizId', (req, res) => {
  try {
    const quiz = Quiz.getById(req.params.quizId)
    quiz.questions = filterQuestion(req.params.quizId)
    res.status(200).json(quiz)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/:quizId', (req, res) => {
  try {
    Quiz.delete(req.params.quizId)
    res.status(200).json({ msg: 'ok' })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/', (req, res) => {
  try {
    console.log(req.body);
    const quiz = Quiz.create({ ...req.body })
    console.log(quiz);
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

router.put('/:quizId', (req, res) => {
  try {
    res.status(200).json(Quiz.update(req.params.quizId, req.body))
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
