const postQueries = require("../db/queries.posts.js");

module.exports = {
  index(req, res, next) {
    postQueries.getAllPosts((err, posts) => {
      if (err) {
        res.redirect(500, "static/index");
      } else {
        res.render("posts/index", { posts });
      }
    });
  },
  new(req, res, next) {
    res.render("posts/new");
  },
  create(req, res, next) {
    let newPost = {
      title: req.body.title,
      description: req.body.description
    };
    postQueries.addPost(newPost, (err, post) => {
      if (err) {
        res.redirect(500, "/posts/new");
      } else {
        res.redirect(303, `/posts/`);
      }
    });
  },

  show(req, res, next) {
    postQueries.getPost(req.params.id, (err, post) => {
      if (err || post == null) {
        res.redirect(404, "/");
      } else {
        res.render("posts/show", { post });
      }
    });
  },

  destroy(req, res, next) {
    postQueries.deletePost(req.params.id, (err, post) => {
      if (err) {
        res.redirect(500, "/posts");
      } else {
        res.redirect(303, "/posts");
      }
    });
  }
};
