// @ts-ignore
const Joi = require('joi');
// @ts-ignore
const BaseModel = require('../utils/base-model.ts')

module.exports = new BaseModel('AnswerHistory', {
  chosenAnswer: Joi.boolean().required().default(false),
  quizHistoryId: Joi.number().required(),
  answerId: Joi.number().required(),
})
