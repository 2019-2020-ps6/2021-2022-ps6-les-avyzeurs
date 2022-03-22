import * as Joi from "joi";

const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Profile', {
  firstname: Joi.string().required(),
  name: Joi.string().required(),
  image: Joi.string(),
  dob: Joi.string(),
  lastConnection: Joi.date().default(Date.now())
})
