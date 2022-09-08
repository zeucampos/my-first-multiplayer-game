import express from "express";
import http from "http";
import { Server } from "socket.io";
import createGame from "./public/game.js";

const app = express();
const server = http.createServer(app);
const sockets = new Server(server);

app.use(express.static("public"));

const game = createGame();
game.start();
game.subscribe((command) => {
  console.log(`> Emitting ${command.type}`);
  sockets.emit(command.type, command);
});

sockets.on("connection", (socket) => {
  const playerId = socket.id;

  game.addPlayer({ playerId });

  socket.emit("setup", game.state);

  socket.on("move-player", (command) => {
    command.playerId = playerId;
    command.type = "move-player";

    game.movePlayer(command);
  });

  socket.on("add-fruit", (command) => {
    game.addFruit(command);
  });

  socket.on("remove-fruit", (command) => {
    game.removeFruit(command);
  });

  socket.on("disconnect", () => {
    game.removePlayer({ playerId });
  });
});

server.listen(3000, () => {
  console.log("> Server listening on port 3000 🚀");
});
