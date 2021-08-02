const { Comment } = require("../models");

const commentData = [
  {
    body: "this is a comment",
    post_id: 1,
    user_id: 1,
  },
  {
    body: "this is a comment",
    post_id: 2,
    user_id: 1,
  },
  {
    body: "this is a comment",
    post_id: 3,
    user_id: 1,
  },
  {
    body: "this is a comment",
    post_id: 4,
    user_id: 1,
  },
  {
    body: "this is another comment",
    post_id: 1,
    user_id: 1,
  },
  {
    body: "this is another comment",
    post_id: 2,
    user_id: 1,
  },
  {
    body: "this is another comment",
    post_id: 3,
    user_id: 1,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;
