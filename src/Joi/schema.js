const Joi = require('joi');

const displayNameSchema = Joi.string().min(8).required().label('displayName')
.messages({
  'any.required': '{{#label}} is required',
  'string.min': '{{#label}} length must be at least 8 characters long',
});

const emailSchema = Joi.string().email().required()
.label('email')
.messages({
  'any.required': '{{#label}} must be a valid email',
  'string.email': '{{#label}} must be a valid email',
});

const passwordSchema = Joi.string().min(6).required().label('password')
.messages({
  'any.required': '{{#label}} is required',
  'string.min': '{{#label}} length must be at least 6 characters long',
});

const newUserSchema = Joi.object({
  displayName: displayNameSchema,
  email: emailSchema,
  password: passwordSchema,
});

module.exports = {
  newUserSchema,
};