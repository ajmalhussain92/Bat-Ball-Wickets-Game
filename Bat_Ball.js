let userChoice, compChoice, winner;
let result = document.querySelector(".result");
let userCount = document.querySelector(".userCount");
let computerCount = document.querySelector(".computerCount");

function generateCompChoice (userChoice) {
  let randNum = Math.random() * 3;
  if (randNum < 1) {
    compChoice = 'Bat';        // 0
  } else if (randNum > 1 && randNum < 2) {
    compChoice = 'Ball';       // 1
  } else {
    compChoice = 'Stump';      // 2
  }
  // alert(`User: ${userChoice}, Computer: ${compChoice}`);
  checkWinner(userChoice, compChoice);
}

function checkWinner (userChoice, compChoice) {
  if (userChoice === compChoice) {
    winner = ""; 
    // alert("Match tied");
  } else if (compChoice === 'Ball'){ 
    winner = (userChoice === 'Bat' ? "User" : "Computer");
    // alert (`Winner: ${winner}`);
  } else if (compChoice === 'Stump'){
    winner = (userChoice === 'Bat' ? "Computer" : "User");
    // alert (`Winner: ${winner}`);
  } else if (compChoice === 'Bat') {
    winner = (userChoice === 'Ball' ? "Computer" : "User");
    // alert (`Winner: ${winner}`);
  }

  changeContent(winner);
}

let userWinningCount = 0, compWinningCount = 0;

function changeContent(winner) {
  if (winner === "") {
    result.textContent = "Match tied.";
  } else if (winner === "User") {
    result.textContent = "User wins!";
    userWinningCount++;
    userCount.innerText = `User :\t${userWinningCount}`;
  } else if (winner === "Computer") {
    result.textContent = "Computer wins!";
    compWinningCount++;
    computerCount.innerText = `Computer :\t${compWinningCount}`;
  }
}


let score = {
  win : 0,
  lost : 0,
  tie : 0,
  displatScore: function() {
    return `Won: ${score.win}, Lost: ${this.lost}, Tie: ${this.tie}`;
  }
}

