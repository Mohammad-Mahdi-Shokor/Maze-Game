window.onload = function () {
  const start = document.getElementById("start");
  const end = document.getElementById("end");
  const boundaries = document.querySelectorAll(".boundary");
  const status = document.getElementById("status");
  const game = document.getElementById("game");

  let gameStarted = false;
  let gameLost = false;
  let gameWon = false;

  function resetGame() {
    gameStarted = true;
    gameLost = false;
    gameWon = false;
    status.innerHTML = "Game started! Avoid the walls!";
    
    for (let i = 0; i < boundaries.length; i++) {
      boundaries[i].classList.remove("youlose");
      boundaries[i].classList.remove("youwin");
    }
  }

  start.onmouseenter = function () {
    resetGame();
  };

  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].onmouseenter = function () {
      if (gameStarted && !gameLost && !gameWon) {
        gameLost = true;
        status.innerHTML = "You Lost, RIP :(";
        
        for (let j = 0; j < boundaries.length; j++) {
          boundaries[j].classList.remove("youwin");
          boundaries[j].classList.add("youlose");
        }
      }
    };
  }

  end.onmouseenter = function () {
    if (gameStarted && !gameLost && !gameWon) {
      gameWon = true;
      status.innerHTML = "You win, Mabrouk ;)";
      alert("Winner Winner Chicken dinner");
      
      for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.remove("youlose");
        boundaries[i].classList.add("youwin");
      }
    }
  };

  game.onmouseleave = function () {
    if (gameStarted && !gameLost && !gameWon) {
      gameLost = true;
      status.innerHTML = "You lost! Ma Tza3ber :)";
      
      for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.remove("youwin");
        boundaries[i].classList.add("youlose");
      }
    }
  };
  
  start.onclick = function() {
    resetGame();
  };
};