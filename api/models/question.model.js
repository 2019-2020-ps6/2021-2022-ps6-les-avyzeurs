const Joi = require('joi')

const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
  question: Joi.string(),
  image: Joi.string(),
  video: Joi.string(),
  quizId: Joi.number(),
})
