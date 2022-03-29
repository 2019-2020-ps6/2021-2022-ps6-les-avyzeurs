// @ts-ignore
const Joi = require('joi');
// @ts-ignore
const BaseModel = require('../utils/base-model.ts')

module.exports = new BaseModel('Question', {
  question: Joi.string().required(),
  image: Joi.string(),
  video: Joi.string(),
  quizId: Joi.number().required(),
})
