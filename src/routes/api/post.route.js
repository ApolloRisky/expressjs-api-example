const express = require('express');
const { validate } = require('express-validation');
const postController = require('../../controllers/post.controller');
const {
  createPostValidation,
  updatePostValidation,
  getPostValidation,
  deletePostValidation,
} = require('../../validations/post.validation');

const router = express.Router();

// GET /api/posts
router.route('/')
  .get(postController.listPost);

// GET /api/posts/:id
router.route('/:id')
  .get(validate(getPostValidation, { keyByField: true }), postController.showPost);

// POST /api/posts
router.route('/')
  .post(validate(createPostValidation, { keyByField: true }), postController.createPost);

// PATCH /api/post/:id
router.route('/:id')
  .patch(validate(updatePostValidation, { keyByField: true }), postController.updatePost);

// DELETE /api/post/:id
router.route('/:id')
  .delete(validate(deletePostValidation, { keyByField: true }), postController.deletePost);

module.exports = router;
