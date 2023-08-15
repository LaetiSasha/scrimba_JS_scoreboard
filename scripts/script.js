let counterHome = document.getElementById("home__counter--score");
let counterGuest = document.getElementById("guest__counter--score");
let score = 0;
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
let score3 = document.querySelector(".score3");
let score4 = document.querySelector(".score4");
let score5 = document.querySelector(".score5");
let score6 = document.querySelector(".score6");

function scoreHome() {
	score1.addEventListener("click", function () {
		score += 1;
		console.log(score);
		counterHome.innerText = score;
	});
	score2.addEventListener("click", function () {
		score += 2;
		console.log(score);
		counterHome.innerText = score;
	});
	score3.addEventListener("click", function () {
		score += 3;
		console.log(score);
		counterHome.innerText = score;
	});
}

scoreHome();

function scoreGuest() {
	score4.addEventListener("click", function () {
		score += 1;
		console.log(score);
		counterGuest.innerText = score;
	});
	score5.addEventListener("click", function () {
		score += 2;
		console.log(score);
		counterGuest.innerText = score;
	});
	score6.addEventListener("click", function () {
		score += 3;
		console.log(score);
		counterGuest.innerText = score;
	});
}
scoreGuest();
