const Joi = require('joi')

const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Profile', {
  firstname: Joi.string().required(),
  name: Joi.string().required(),
  image: Joi.string(),
  dob: Joi.date(),
  lastConnection: Joi.date()
})
