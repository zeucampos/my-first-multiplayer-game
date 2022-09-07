export default function createKeyboardListener(document) {
  const state = {
    observers: [],
  };

  function subscribe(observerFunction) {
    state.observers.push(observerFunction);
  }

  function notifyAll(command) {
    state.observers.forEach((observer) => observer(command));
  }

  document.addEventListener("keydown", handleKeyDown);

  function handleKeyDown(e) {
    const keyPressed = e.key;

    const command = {
      playerId: "player1",
      keyPressed,
    };

    notifyAll(command);
  }

  return {
    subscribe,
    notifyAll,
  };
}
