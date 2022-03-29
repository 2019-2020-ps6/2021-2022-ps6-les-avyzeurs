const { Router } = require('express')

const { Answer } = require('../../../../models')
const {filterAnswer} = require("./manager");

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  try {
    // eslint-disable-next-line radix
    res.status(200).json(filterAnswer(req.params.questionId))
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:answerId', (req, res) => {
  try {
    if (Answer.getById(req.params.answerId).questionId === parseInt(req.params.questionId, 10)) {
      res.status(200).json(Answer.getById(req.params.answerId))
    } else {
      res.status(400).json({ error: 'question does not belong to quiz' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/:answerId', (req, res) => {
  try {
    if (Answer.getById(req.params.answerId).questionId === parseInt(req.params.questionId, 10)) {
      Answer.delete(req.params.answerId)
      res.status(200).json({ msg: 'ok' })
    } else {
      res.status(400).json({ error: 'question does not belong to quiz' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/:answerId', (req, res) => {
  try {
    if (Answer.getById(req.params.answerId).questionId === parseInt(req.params.questionId, 10)) {
      res.status(200).json(Answer.update(req.params.answerId, req.body))
    } else {
      res.status(400).json({ error: 'question does not belong to quiz' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/', (req, res) => {
  try {
    const question = Answer.create({ ...req.body, questionId: parseInt(req.params.questionId, 10) })
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
