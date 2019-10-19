const Post = require("./models").Post;

module.exports = {

  getAllPosts(callback){
    return Post.findAll()

    .then((posts) => {
      callback(null, posts);
    })
    .catch((err) => {
      callback(err);
    })
  },

  addPost(newPost, callback){
      return Post.create({
        title: newPost.title,
        description: newPost.description
      })
      .then((post) => {
        callback(null, post);
      })
      .catch((err) => {
        callback(err);
      })
    },

    getPost(id, callback){
       return Post.findById(id)
       .then((post) => {
         callback(null, post);
       })
       .catch((err) => {
         callback(err);
       })
     },

     deletePost(id, callback){
     return Post.destroy({
       where: {id}
     })
     .then((post) => {
       callback(null, post);
     })
     .catch((err) => {
       callback(err);
     })
   }
}
