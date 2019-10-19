const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/posts";
const sequelize = require("../../src/db/models/index").sequelize;
const Post = require("../../src/db/models").Post;

describe("routes : posts", () => {

  beforeEach((done) => {
        this.post;
        sequelize.sync({force: true}).then((res) => {

         Post.create({
           title: "JS Frameworks",
           description: "There is a lot of them"
         })
          .then((post) => {
            this.post = post;
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });

        });

      });


  describe("GET /posts", () => {

    it("should return a status code 200 and all posts", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("Posts");
        expect(body).toContain("JS Frameworks");
        done();
      });
    });
  });

  describe("GET /posts/new", () => {

    it("should render a new post form", (done) => {
      request.get(`${base}/new`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("New Post");
        done();
      });
    });

  });

  describe("POST /posts/create", () => {
      const options = {
        url: `${base}/create`,
        form: {
          title: "blink-182 songs",
          description: "What's your favorite blink-182 song?"
        }
      };

      it("should create a new post and redirect", (done) => {

//#1
        request.post(options,

//#2
          (err, res, body) => {
            Post.findOne({where: {title: "blink-182 songs"}})
            .then((post) => {
              expect(res.statusCode).toBe(303);
              expect(post.title).toBe("blink-182 songs");
              expect(post.description).toBe("What's your favorite blink-182 song?");
              done();
            })
            .catch((err) => {
              console.log(err);
              done();
            });
          }
        );
      });
    });

    describe("GET /posts/:id", () => {

     it("should render a view with the selected post", (done) => {
       request.get(`${base}/${this.post.id}`, (err, res, body) => {
         expect(err).toBeNull();
         expect(body).toContain("JS Frameworks");
         done();
       });
     });

   });

   describe("POST /posts/:id/destroy", () => {

     it("should delete the post with the associated ID", (done) => {

       Post.findAll()
       .then((posts) => {

         const postCountBeforeDelete = posts.length;

         expect(postCountBeforeDelete).toBe(1);

         request.post(`${base}/${this.post.id}/destroy`, (err, res, body) => {
           Post.findAll()
           .then((posts) => {
             expect(err).toBeNull();
             expect(posts.length).toBe(postCountBeforeDelete - 1);
             done();
           })

         });
       });

     });

   });

});
