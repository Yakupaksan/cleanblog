const AddPost = require('../models/AddPost')

exports.getAboutPage = (req, res) => {
  res.render("about");
};

exports.getEditPage = async (req, res) => {
  const addposts = await AddPost.findById(req.params.id);
  res.render("edit", {
    addposts,
  });
};

exports.getAddPage = async (req, res) => {
  await AddPost.create(req.body);
  res.redirect("/");
};
