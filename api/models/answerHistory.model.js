const Joi = require('joi');
const BaseModel = require('../utils/base-model')

module.exports = new BaseModel('AnswerHistory', {
  chosenAnswer: Joi.boolean().required().default(false),
  quizHistoryId: Joi.number().required(),
  answerId: Joi.number().required(),
})
