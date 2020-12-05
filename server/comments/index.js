const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const comments = [];
let commentsByPostId = {};

//Return all comments
app.get("/api/comments/posts/:id", (req, res) => {
  comments.map((comment) => {
    if (comment.id == req.params.id) {
      commentsByPostId = comment.comments[req.params.id];
    }
  });
  return res.status(200).json(commentsByPostId);
});

//Create a post comment

app.post("/api/comments/posts/:id", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  if (req.body.content.length < 1) {
    throw new Error("content is required");
  }
  let comment = { id: commentId, content };
  const comments = commentsByPostId[req.params.id] || [];
  comments.push(comment);
  commentsByPostId[req.params.id] = comments;
  console.log(content);
  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log("App listening on port 4001");
});
