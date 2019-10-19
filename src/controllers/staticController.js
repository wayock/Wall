const postQueries = require("../../src/db/queries.posts.js");

module.exports = {
  index(req, res, next){

    postQueries.getAllPosts((err, posts) => {
       if(err){
         res.redirect(500, "/");
       } else {
         res.render("posts/index", {posts});
       }
     })
  }
}
