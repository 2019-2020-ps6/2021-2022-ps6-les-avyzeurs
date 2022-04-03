const Joi = require('joi')

const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('QuizHistory', {
  quizId: Joi.number().required(),
  profileId: Joi.number().required(),
})
