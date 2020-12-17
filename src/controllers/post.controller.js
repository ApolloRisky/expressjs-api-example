const httpStatus = require('http-status');
const APIError = require('../utils/APIError');
const Post = require('../models/post.model');
const { postSerializer, postCollectionSerializer } = require('../serializers/post.serializer');

// Get list posts
exports.listPost = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json({ list: postCollectionSerializer(posts) });
  } catch (error) {
    next(error);
  }
};

// Get post by ID
exports.showPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      throw new APIError({
        status: httpStatus.NOT_FOUND,
        message: 'Post not found',
      });
    }
    res.json({ item: postSerializer(post) });
  } catch (error) {
    next(error);
  }
};

// Create post
exports.createPost = async (req, res, next) => {
  try {
    const post = new Post(req.body);
    const savedPost = await post.save();

    res.json({ item: postSerializer(savedPost) });
  } catch (error) {
    next(error);
  }
};

// Update post by ID
exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) {
      throw new APIError({
        status: httpStatus.NOT_FOUND,
        message: 'Post not found',
      });
    }
    res.json({ item: postSerializer(post) });
  } catch (error) {
    next(error);
  }
};

// Delete post by ID
exports.removePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndRemove(req.params.id);
    if (!post) {
      throw new APIError({
        status: httpStatus.NOT_FOUND,
        message: 'Post not found',
      });
    }
    res.json({
      deleted: postSerializer(post),
    });
  } catch (error) {
    next(error);
  }
};
