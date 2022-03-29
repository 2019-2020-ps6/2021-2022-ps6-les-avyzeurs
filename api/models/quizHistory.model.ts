// @ts-ignore
const Joi = require('joi');
// @ts-ignore
const BaseModel = require('../utils/base-model.ts')

module.exports = new BaseModel('QuizHistory', {
  quizId: Joi.number().required(),
  profileId: Joi.number().required(),
})
