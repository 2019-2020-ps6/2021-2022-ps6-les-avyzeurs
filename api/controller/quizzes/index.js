const {Router} = require('express')

const {Quiz, Question, Answer, QuizHistory} = require('../../models')

const questionRouter = require('./questions/index')

const {filterQuestion} = require("./questions/manager");
const {filterAnswer} = require("./questions/answers/manager");
const Joi = require("joi");

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
    quiz.questions.forEach((question) => {
      question.answers = filterAnswer(question.id)
    })
    res.status(200).json(quiz)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/:quizId', (req, res) => {
  try {
    let id = Number.parseInt(req.params.quizId)
    Quiz.delete(id)
    for (let q of Question.get()) if (q.quizId === id) {
      for (let a of Answer.get()) if (a.questionId === q.id) Answer.delete(a.id)
      Question.delete(q.id)
    }
    for (let qh of QuizHistory.get()) if (qh.quizId === id) QuizHistory.delete(qh.id)
    res.status(200).json({msg: 'ok'})
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/', (req, res) => {
  try {
    const quiz = Quiz.create({...req.body})
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

router.post('/new', (req, res) => {
  try {
    const quiz = Quiz.create({
      "name": req.body['name'], "image": req.body['image']
    })
    for (let i = 0; i < req.body['questions'].length; i++) {
      let q = req.body['questions'][i]
      const question = Question.create({
        "question": q['question'], "image": q['image'], "video": q['video'], "quizId": quiz.id
      })
      for (let j = 0; j < q['answers'].length; j++) {
        let a = q['answers'][j]
        Answer.create({
          "label": a['label'],
          "type": Number.parseInt(a['type']),
          "correctAnswer": !!a['correctAnswer'],
          "questionId": question.id
        })
      }
    }
    //const quiz = Quiz.create({...req.body})
    res.status(201).json(req.body)
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
