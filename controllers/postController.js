const AddPost = require("../models/AddPost");

exports.getAllPosts = async (req, res) => {
  const addposts = await AddPost.find({}).sort("-dateCreated");
  res.render("index", {
    addposts,
  });
};

exports.getPost = async (req, res) => {
  const addposts = await AddPost.findById(req.params.id);
  res.render("post", {
    addposts,
  });
};

exports.getUpdate = async (req, res) => {
  const addposts = await AddPost.findOne({ _id: req.params.id });
  addposts.title = req.body.title;
  addposts.description = req.body.description;
  addposts.save();
  res.redirect(`/addposts/${req.params.id}`);
};

exports.getDelete = async (req, res) => {
  await AddPost.findByIdAndRemove(req.params.id);
  res.redirect("/");
};
