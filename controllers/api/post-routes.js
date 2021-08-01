const router = require("express").Router();
const { Post, Comment } = require("../../models");
const getUsername = require("../../utils/dbHelpers");
// /api/post routes

router.post("/", async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.body.user_id,
    });
    res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

router.get("/:id", async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id);
    const post = dbPostData.get({ plain: true });
    const username = await getUsername(req.params.id);
    console.log(username);
    res.render("single-post", { post, username });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
