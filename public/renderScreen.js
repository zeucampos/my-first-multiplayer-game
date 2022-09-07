export default function renderScreen(screen, game, requestAnimationFrame) {
  const ctx = screen ? screen.getContext("2d") : null;

  ctx.fillStyle = "white";
  ctx.clearRect(0, 0, 10, 10);

  for (const playerId in game.state.players) {
    const player = game.state.players[playerId];
    ctx.fillStyle = "#B4A6AB";
    ctx.fillRect(player.x, player.y, 1, 1);
  }

  for (const fruitId in game.state.fruits) {
    const fruit = game.state.fruits[fruitId];
    ctx.fillStyle = "#946E83";
    ctx.fillRect(fruit.x, fruit.y, 1, 1);
  }

  requestAnimationFrame(() => {
    renderScreen(screen, game, requestAnimationFrame);
  });
}
