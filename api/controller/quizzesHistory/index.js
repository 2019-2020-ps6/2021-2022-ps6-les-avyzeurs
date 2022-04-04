const {Router} = require('express')

const {Quiz, QuizHistory, AnswerHistory, Answer, Question} = require('../../models')
const {filterQuestion} = require("../quizzes/questions/manager");


const router = new Router()

router.get('/:quizHistoryId', (req, res) => {
  try {
    const quizHistory = QuizHistory.getById(req.params.quizHistoryId)
    quizHistory.questions = filterQuestion(quizHistory.quizId)
    quizHistory.questions.forEach((question) => {
      question.answers = filterAnswerHistory(req.params.quizHistoryId, question.id)
    })
    res.status(200).json(quizHistory)
  } catch (err) {
    res.status(500).json(err)
  }
})

function filterAnswerHistory(quizHistoryId, questionId) {
  return AnswerHistory.get().filter((a) => {
    return parseInt(a.quizHistoryId, 10) === parseInt(quizHistoryId, 10) && parseInt(Answer.getById(a.answerId).questionId, 10) === parseInt(questionId, 10);
  })
}

router.post('/', (req, res) => {
  try {
    let quizHistoryValue = {
      "quizId": req.body.quizId, "profileId": req.body.profileId,
    }
    const quizHistory = QuizHistory.create(quizHistoryValue)
    Object.keys(req.body.answers).forEach((key) => AnswerHistory.create({
      "chosenAnswer": req.body.answers[key], "quizHistoryId": quizHistory.id, "answerId": key
    }))
    res.status(201).json(quizHistory)
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
