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

let comments = [];

app.post("/api/comments", (req, res) => {
  const { text } = req.body;
  const comment = {
    id: Date.now(),
    text,
    createdAt: new Date().toISOString(),
  };
  comments.push(comment);
  io.emit("new-comment", comment);
  res.status(201).json(comment);
});

app.get("/api/comments", (req, res) => {
  res.json(comments);
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});
