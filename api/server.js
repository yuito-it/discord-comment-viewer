const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());
app.use(express.json());

let comments1 = [];

app.post("/api/1/comments", (req, res) => {
  const { text } = req.body;
  const comment = {
    id: Date.now(),
    text,
    createdAt: new Date().toISOString(),
  };
  comments1.push(comment);
  console.log("Posting comment:", comment);
  io.emit("new-comment1", comment);
  res.status(201).json(comment);
});

app.get("/api/1/comments", (req, res) => {
  res.json(comments1);
});
/*
let comments2 = [];

app.post("/api/2/comments", (req, res) => {
  const { text } = req.body;
  const comment = {
    id: Date.now(),
    text,
    createdAt: new Date().toISOString(),
  };
  comments2.push(comment);
  io.emit("new-comment2", comment);
  res.status(201).json(comment);
});

app.get("/api/2/comments", (req, res) => {
  res.json(comments2);
});

let comments3 = [];

app.post("/api/3/comments", (req, res) => {
  const { text } = req.body;
  const comment = {
    id: Date.now(),
    text,
    createdAt: new Date().toISOString(),
  };
  comments3.push(comment);
  io.emit("new-comment3", comment);
  res.status(201).json(comment);
});

app.get("/api/3/comments", (req, res) => {
  res.json(comments3);
});

let comments4 = [];

app.post("/api/4/comments", (req, res) => {
  const { text } = req.body;
  const comment = {
    id: Date.now(),
    text,
    createdAt: new Date().toISOString(),
  };
  comments4.push(comment);
  io.emit("new-comment4", comment);
  res.status(201).json(comment);
});

app.get("/api/4/comments", (req, res) => {
  res.json(comments4);
});

let comments5 = [];

app.post("/api/5/comments", (req, res) => {
  const { text } = req.body;
  const comment = {
    id: Date.now(),
    text,
    createdAt: new Date().toISOString(),
  };
  comments5.push(comment);
  io.emit("new-comment5", comment);
  res.status(201).json(comment);
});

app.get("/api/5/comments", (req, res) => {
  res.json(comments5);
});

let comments6 = [];

app.post("/api/6/comments", (req, res) => {
  const { text } = req.body;
  const comment = {
    id: Date.now(),
    text,
    createdAt: new Date().toISOString(),
  };
  comments6.push(comment);
  io.emit("new-comment6", comment);
  res.status(201).json(comment);
});

app.get("/api/6/comments", (req, res) => {
  res.json(comments6);
});

let comments7 = [];

app.post("/api/7/comments", (req, res) => {
  const { text } = req.body;
  const comment = {
    id: Date.now(),
    text,
    createdAt: new Date().toISOString(),
  };
  comments7.push(comment);
  io.emit("new-comment7", comment);
  res.status(201).json(comment);
});

app.get("/api/7/comments", (req, res) => {
  res.json(comments7);
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
*/
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});
