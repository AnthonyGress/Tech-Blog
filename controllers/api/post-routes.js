const router = require("express").Router();
const { Post, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");
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
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["username", "id"],
            },
          ],
        },
        {
          model: User,
          attributes: ["username", "id"],
        },
      ],
    });
    const post = dbPostData.get({ plain: true });
    console.log(post);
    res.render("single-post", post);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
