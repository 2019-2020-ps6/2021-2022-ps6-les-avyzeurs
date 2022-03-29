const Joi = require('joi')

const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Quiz', {
  label: Joi.string().required(),
  image: Joi.string().required(),
})
