const Joi = require('joi')

const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('AnswerHistory', {
  quizHistoryId: Joi.number().required(),
  answerId: Joi.number().required(),
})
