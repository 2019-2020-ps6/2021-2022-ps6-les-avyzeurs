const { Router } = require('express')

const { Question } = require('../../../models')
const { filterQuestion } = require('./manager')

const router = new Router({ mergeParams: true })

const reponseRouter = require('./answers/index')

router.use('/:questionId/answers', reponseRouter)

router.get('/', (req, res) => {
  try {
    // eslint-disable-next-line radix
    res.status(200).json(filterQuestion(req.params.quizId))
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:questionId', (req, res) => {
  try {
    if (Question.getById(req.params.questionId).quizId === parseInt(req.params.quizId, 10)) {
      res.status(200).json(Question.getById(req.params.questionId))
    } else {
      res.status(400).json({ error: 'question does not belong to quiz' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/:questionId', (req, res) => {
  try {
    if (Question.getById(req.params.questionId).quizId === parseInt(req.params.quizId, 10)) {
      Question.delete(req.params.questionId)
      res.status(200).json({ msg: 'ok' })
    } else {
      res.status(400).json({ error: 'question does not belong to quiz' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/:questionId', (req, res) => {
  try {
    if (Question.getById(req.params.questionId).quizId === parseInt(req.params.quizId, 10)) {
      res.status(200).json(Question.update(req.params.questionId, req.body))
    } else {
      res.status(400).json({ error: 'question does not belong to quiz' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/', (req, res) => {
  try {
    const question = Question.create({ ...req.body, quizId: parseInt(req.params.quizId, 10) })
    res.status(201).json(question)
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
})

module.exports = router
