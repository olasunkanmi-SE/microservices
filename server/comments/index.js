const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  return res.status(200).json(commentsByPostId);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ commentId, content });
  commentsByPostId[req.params.id] = comments;
  return res.status(201).json(comments);
});

app.listen(4001, () => {
  console.log("App listening on port 4001");
});
