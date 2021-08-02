const { User } = require("../models");

get_username = (user_id) => {
  User.findByPk(user_id)
    .then((user) => {
      const username = user.get({ plain: true });
      console.log(username.username);
      return username.username;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { get_username };
