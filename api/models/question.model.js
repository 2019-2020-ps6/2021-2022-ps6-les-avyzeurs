const Joi = require('joi')

const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
  question: Joi.string().required(),
  image: Joi.string().optional().allow(''),
  video: Joi.string().optional().allow(''),
  quizId: Joi.number().required(),
})
