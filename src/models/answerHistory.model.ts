import * as Joi from "joi";

const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('AnswerHistory', {
  chosenAnswer: Joi.boolean().required().default(false),
  quizHistoryId: Joi.number().required(),
  answerId: Joi.number().required(),
})
