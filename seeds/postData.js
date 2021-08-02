const { Post, Comment } = require("../models");

const postData = [
  {
    title: "New Post 1",
    body: "This is the first blog post on this site!",
    user_id: 1,
  },
  {
    title: "This site rocks!",
    body: "Wow, this dude can make some cool stuff!",
    user_id: 2,
  },
  {
    title: "This is very useful!",
    body: "Lets connect!",
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postData);
module.exports = seedPost;
