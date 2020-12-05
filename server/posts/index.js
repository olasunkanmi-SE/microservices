const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");

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
  res.status(201).send(posts);
});

app.listen(4000, () => {
  console.log("listening on post 4000");
});
