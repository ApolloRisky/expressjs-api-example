const { Joi } = require('express-validation');

module.exports = {
  createPostValidation: {
    body: Joi.object({
      title: Joi.string()
        .required(),
      description: Joi.string()
        .required(),
      body: Joi.string()
        .required(),
    }),
  },
  updatePostValidation: {
    body: Joi.object({
      title: Joi.string(),
      description: Joi.string(),
      body: Joi.string(),
    }),
  },
  getPostValidation: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },
  deletePostValidation: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },
};
