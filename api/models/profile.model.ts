// @ts-ignore
const Joi = require('joi');
// @ts-ignore
const BaseModel = require('../utils/base-model.ts')

module.exports = new BaseModel('Profile', {
  firstname: Joi.string().required(),
  name: Joi.string().required(),
  image: Joi.string(),
  dob: Joi.string(),
  lastConnection: Joi.date().default(Date.now())
})
