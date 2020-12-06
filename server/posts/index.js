const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = [];

app.get("/api/posts", (req, res) => {
  res.send(posts);
});
app.post("/api/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  if (title.length < 1) {
    return status(400).send("title is required");
  }
  let post = { id, title };
  posts.push(post);
  //send out event
  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: post,
  });
  res.status(201).send(posts);
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body);
  res.send({});
});

app.listen(4000, () => {
  console.log("listening on post 4000");
});
