// @ts-ignore
const Joi = require('joi');
// @ts-ignore
const BaseModel = require('../utils/base-model.ts')

module.exports = new BaseModel('Quiz', {
  label: Joi.string().required(),
  image: Joi.string().required(),
})
