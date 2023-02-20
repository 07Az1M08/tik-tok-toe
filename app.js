window.addEventListener("load", function () {
  let redScore = document.querySelector(".red-score"),
    blueScore = document.querySelector(".blue-score"),
    redBtns = document.querySelector(".red-btns"),
    blueBtns = document.querySelector(".blue-btns"),
    btn = document.querySelectorAll(".btn"),
    res = document.querySelector(".winner"),
    winner = document.querySelector(".win"),
    redStep,
    blueStep,
    rScore = 0,
    bScore = 0,
    blocked = false;

  function choiceBlue(e) {
    if (blocked) return;
    let target = e.target;
    if (target.classList.contains("btn")) {
      blueStep = target.dataset.btn;
      btn.forEach((btn) => btn.classList.remove("blue-active", "red-active"));
      target.classList.add("blue-active");
      choiceRed();
    }
  }
  function choiceRed() {
    blocked = true;
    let rand = Math.floor(Math.random() * 3);
    let target = redBtns.querySelectorAll(".btn");
    redStep = target[rand].dataset.btn;
    target[rand].classList.add("red-active");
    setTimeout(() => {
      btn.forEach((btn) => btn.classList.remove("blue-active", "red-active"));
      Winner();
    }, 500);
  }

  function Winner() {
    blocked = false;
    let comb = blueStep + redStep;

    switch (comb) {
      case "rr":
      case "ss":
      case "pp":
        break;
      case "rs":
      case "sp":
      case "pr":
        bScore++;
        blueScore.innerText = `Score: ${bScore}`;
        break;
      case "sr":
      case "ps":
      case "rp":
        rScore++;
        redScore.innerText = `Score: ${rScore}`;
        break;
    }
  }

  // function PlayAgain() {
  //   if (rScore === 3 || bScore === 3) {

  //   }
  // }

  function WhoWin() {
    if (rScore === 3) {
      res.style = "display: block;";
      res.innerText = "Winner - Red";
      rScore = 0;
      rScore.innerText = 0;
    } else if (bScore === 3) {
      res.style = "display: block;";
      res.innerText = "Winner - Blue";
      bScore = 0;
      bScore.innerText = 0;
    }
  }
  blueBtns.addEventListener("click", WhoWin);
  // blueBtns.addEventListener("click", PlayAgain);
  blueBtns.addEventListener("click", choiceBlue);
});
