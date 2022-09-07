export default function renderScreen(screen, game, requestAnimationFrame) {
  const ctx = screen.getContext("2d");

  ctx.fillStyle = "white";
  ctx.clearRect(0, 0, 10, 10);

  for (const playerId in game.state.players) {
    const player = game.state.players[playerId];
    ctx.fillStyle = "#4f1ad6";
    ctx.fillRect(player.x, player.y, 1, 1);
  }

  for (const fruitId in game.state.fruits) {
    const fruit = game.state.fruits[fruitId];
    ctx.fillStyle = "#1ac3d6";
    ctx.fillRect(fruit.x, fruit.y, 1, 1);
  }

  requestAnimationFrame(() => {
    renderScreen();
  });
}
