// JavaScript code to load and play web games, and toggle fullscreen mode

let isFullscreen = false; // Variable to keep track of fullscreen state

// Function to load a game into the game container
function loadGame(gameUrl) {
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = `<embed src="${gameUrl}" width="100%" height="100%" frameborder="0"></embed>`;
}
function loadCustomGame() {
  loadGame(document.getElementById('url-input').value)
}
// Function to toggle fullscreen mode
function toggleFullscreen() {
  const gameContainer = document.getElementById('game-container');
  const fullscreenBtn = document.getElementById('fullscreen-btn');

  if (!isFullscreen) {
    if (gameContainer.requestFullscreen) {
      gameContainer.requestFullscreen();
    } else if (gameContainer.mozRequestFullScreen) {
      gameContainer.mozRequestFullScreen();
    } else if (gameContainer.webkitRequestFullscreen) {
      gameContainer.webkitRequestFullscreen();
    } else if (gameContainer.msRequestFullscreen) {
      gameContainer.msRequestFullscreen();
    }
  } 
}
