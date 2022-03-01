const Post = require("../models/Post");
const {
  verifyToken,
} = require("./verifyToken");

const router = require("express").Router();
 
//CREATE

router.post("/", verifyToken, async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET ALL POSTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let posts;

    if (qNew) {
      posts = await Post.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      posts = await Post.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      posts = await Post.find();
    }

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
