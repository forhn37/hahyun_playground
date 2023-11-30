document.addEventListener("DOMContentLoaded", () => {
  const player = document.querySelector(".player");
  const poop = document.querySelector(".poop");

  document.addEventListener("keydown", movePlayer);

  function movePlayer(event) {
    if (event.key === "ArrowLeft" && parseInt(player.style.left) > 0) {
      player.style.left = parseInt(player.style.left) - 10 + "px";
    } else if (event.key === "ArrowRight" && parseInt(player.style.left) < 350) {
      player.style.left = parseInt(player.style.left) + 10 + "px";
    }
  }

  function checkCollision() {
    const playerRect = player.getBoundingClientRect();
    const poopRect = poop.getBoundingClientRect();

    if (
      playerRect.bottom > poopRect.top &&
      playerRect.top < poopRect.bottom &&
      playerRect.right > poopRect.left &&
      playerRect.left < poopRect.right
    ) {
      alert("Game Over! Try again.");
      resetGame();
    }
  }

  function resetGame() {
    player.style.left = "175px";
  }

  setInterval(checkCollision, 400);
});
