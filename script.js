let runs = 0;
let wickets = 0;
let balls = 0;
let first = 0;
let sec = 0;
const button = document.querySelectorAll('.button-container button');

function updateScore() {
    // Update the scoreboard
    document.getElementById('runs').textContent = `Runs: ${runs}`;
    document.getElementById('wickets').textContent = `Wickets: ${wickets}`;
    document.getElementById('overs').textContent = `Overs: ${first}.${sec}`;
}
function weightedRandom() {
    const random = Math.random();
    if (random < 0.75) {
      // 75% chance to generate a number between 0 to 5
      return Math.floor(Math.random() * 6);
    } else {
      // 15% chance to generate 6
      return 6;
    }
  }
  

  
// Event listener for each button
button.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const buttonValue = parseInt(event.target.textContent);  // Convert the button value to a number
        const randomNumber = weightedRandom();

        // Check if button value matches the random number
        if (buttonValue === randomNumber) {
            wickets += 1;  // Increase wickets
        } else {
            runs += buttonValue;  // Increase runs
        }

        balls += 1;  // Increment balls
        first = Math.floor(balls / 6);  // Calculate overs (whole part)
        sec = balls % 6;  // Calculate balls (remainder)

        // Update the scoreboard
        updateScore();

        // Stop if wickets reach 10
        if (wickets >= 10) {
            alert('Game Over!');
        }
    });
});
