const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const comments = [];
let commentsByPostId = {};

//Return all comments
app.get("/api/comments/posts/:id", (req, res) => {
  let commentId = req.params.id;
  let postComments = commentsByPostId[commentId];
  if (postComments) {
    return res.status(200).json(postComments);
  } else {
    return;
  }
});

//Create a post comment

app.post("/api/comments/posts/:id", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  if (req.body.content.length < 1) {
    throw new Error("content is required");
  }
  let comment = { id: commentId, content };
  const comments = commentsByPostId[req.params.id] || [];
  comments.push(comment);
  //Send a new event
  try {
    await axios.post("http://localhost:4005/events", {
      type: "CommentCreated",
      data: {
        id: commentId,
        content,
        postId: req.params.id,
      },
    });
  } catch (error) {
    console.log(error);
  }

  commentsByPostId[req.params.id] = comments;
  res.status(201).send(comments);
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body);
  res.send({});
});

app.listen(4001, () => {
  console.log("App listening on port 4001");
});
