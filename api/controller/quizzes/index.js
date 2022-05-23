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

router.post('/new', (req, res) => {

  try {
    const id = Quiz.create({
      "name": req.body.name, "image": req.body.image
    }).id
    let q;
    for (let question of req.body.questions) {
      q = Question.create({
        "question": question.question, "image": question.image, "video": question.video, "quizId": id
      })
      for (let answer of question.answers) {
        Answer.create({
          "label": answer.label, "type": answer.type, "correctAnswer": !!answer.correctAnswer, "questionId": q.id
        })
      }
    }
  } catch (err) {
    if (err.name === 'ValidationError') res.status(400).json(err.extra); else res.status(500).json(err)
  }
})

router.put('/:quizId', (req, res) => {
  console.log("put")
  try {
    res.status(200).json(Quiz.update(req.params.quizId, req.body))
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
