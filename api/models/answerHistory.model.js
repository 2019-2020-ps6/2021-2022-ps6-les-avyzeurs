const Joi = require('joi')

const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('AnswerHistory', {
  chosenAnswer: Joi.boolean().required(),
  quizHistoryId: Joi.number().required(),
  answerId: Joi.number().required(),
})
