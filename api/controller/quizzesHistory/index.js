const {Router} = require('express')

const {QuizHistory, AnswerHistory, Answer, Question, Quiz} = require('../../models')


const router = new Router()

router.get('/', (req, res) => {
  try {
    const quizHistory = QuizHistory.get()
    quizHistory.forEach((q) => q.answers = AnswerHistory.where("quizHistoryId", q.id, true))
    res.status(200).json(quizHistory)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:quizHistoryId', (req, res) => {
  try {
    const quizHistory = QuizHistory.getById(req.params.quizHistoryId)
    quizHistory.questions = Question.where("quizId", quizHistory.quizId, true)
    quizHistory.questions.forEach((question) => {
      question.answers = filterAnswerHistoryForResult(req.params.quizHistoryId, question.id)
    })
    res.status(200).json(quizHistory)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/fromProfile/:profileId', (req, res) => {
  try {
    const quizHistory = QuizHistory.where("profileId", req.params.profileId, true)
    quizHistory.forEach((q) => {
      q.name = Quiz.getById(q.quizId).name
      const answers = AnswerHistory.where("quizHistoryId", q.id, true)
      let score = 0;
      answers.forEach(a => {
        if (Answer.getById(a.answerId).correctAnswer) score++
      })
      q.score = score;
      q.nbQuestions = Question.where("quizId", q.quizId,true).length
    })
    res.status(200).json(quizHistory)
  } catch (err) {
    res.status(500).json(err)
  }
})

function filterAnswerHistoryForResult(quizHistoryId, questionId) {
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
