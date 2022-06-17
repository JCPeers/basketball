let homeScore = document.getElementById("home-score");

let homeCount = 0;

function homeAdd(incrementBy) {
  homeCount += incrementBy;
  homeScore.textContent = homeCount;
}

let guestScore = document.getElementById("guest-score");

let guestCount = 0;

function guestAdd(incrementBy) {
  guestCount += incrementBy;
  guestScore.textContent = guestCount;
}
