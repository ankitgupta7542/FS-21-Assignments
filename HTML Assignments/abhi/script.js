document.getElementById("btn").addEventListener("click", function() {
  let score = 3;

  // Check answer for the capital of France
  let capitalAnswer = document.querySelector('input[name="cap-opt"]:checked');
  if (capitalAnswer.value === "Paris") {
      score++;
  }

console.log(score);
  

  // Check answer for the Red Planet
  let planetAnswer = document.querySelector('input[name="planet-opt"]:checked');
  if (planetAnswer.value === "Mars") {
      score++;
  }

  // Display the score
  document.getElementById("score").textContent = "Score: " + score;
  console.log("Score:", score);
});
