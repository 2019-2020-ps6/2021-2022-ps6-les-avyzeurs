const Joi = require('joi');
const BaseModel = require('../utils/base-model.ts')

module.exports = new BaseModel('Parameter', {
  type: Joi.number().required().default(0),
  value: Joi.number().required().default(0),
  isEnabled: Joi.boolean().required().default(true),
  profileId: Joi.number().required(),
})
