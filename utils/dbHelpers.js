const { User } = require("../models");
// takes in user_id and returns the username
module.exports = async function (user_id) {
  const dbUserData = await User.findByPk(user_id);
  const username = dbUserData.get({ plain: true });
  return username.username;
};
