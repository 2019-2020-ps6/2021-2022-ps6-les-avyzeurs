const {Router} = require('express')

const {QuizHistory, AnswerHistory, Answer, Question, Quiz} = require('../../models')


const router = new Router()

router.get('/', (req, res) => {
  try {
    const quizHistory = QuizHistory.get()
    res.status(200).json(quizHistory)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:quizHistoryId', (req, res) => {
  try {
    const quizHistory = QuizHistory.getById(req.params.quizHistoryId)
    quizHistory.name = Quiz.getById(quizHistory.quizId).name
    quizHistory.image = Quiz.getById(quizHistory.quizId).image
    quizHistory.questions = Question.where("quizId", quizHistory.quizId, true)
    quizHistory.answers = [];
    quizHistory.questions.forEach((question) => {
      quizHistory.answers.push(filterAnswerHistoryForResult(req.params.quizHistoryId, question.id))
    })
    res.status(200).json(quizHistory)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/profile/:profileId', (req, res) => {
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
      q.nbQuestions = Question.where("quizId", q.quizId, true).length
    })
    quizHistory.reverse();
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
    req.body.answers.forEach((value) => {
      console.log(value)
      return AnswerHistory.create({
        "quizHistoryId": quizHistory.id, "answerId": value
      });
    })
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
