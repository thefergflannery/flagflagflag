document.addEventListener('DOMContentLoaded', () => {
  const _ = (id) => document.getElementById(id);
  let countriesData = [];
  let currentIndex = 0;
  let score = 0;
  let round = 1;
  let timer;
  const totalRounds = 10;
  const timerDuration = 30;
  const fullDashArray = 176;
  const timeLimit = timerDuration;
  let timePassed = 0;
  let timeLeft = timeLimit;
  let comboMultiplier = 1;
  let consecutiveCorrectAnswers = 0;

  // Fetch countries data from JSON file
  const fetchCountriesData = async () => {
    const response = await fetch('countries.json');
    countriesData = await response.json();
    populateDropdown();
    nextFlag();
  };

  // Populate the dropdown menu with country names
  const populateDropdown = () => {
    const dropdown = _('guess-input');
    dropdown.innerHTML = '<option value="" selected>Select Country</option>'; // Add default option
    countriesData
      .sort((a, b) => a.country.localeCompare(b.country)) // Sort alphabetically
      .forEach(({ country }) => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        dropdown.appendChild(option);
      });
  };

  // Start the 30-second timer for each round
  const startTimer = () => {
    timePassed = 0;
    timeLeft = timeLimit;
    _('timer-text').textContent = timeLeft;
    updateTimer();
    _('timer-container').classList.remove('flash'); // Remove flash class at the start

    timer = setInterval(() => {
      timePassed++;
      timeLeft = timeLimit - timePassed;
      _('timer-text').textContent = timeLeft;
      updateTimer();

      if (timeLeft <= 10) { // Add flash class when time left is 10 seconds or less
        _('timer-container').classList.add('flash');
      } else {
        _('timer-container').classList.remove('flash');
      }

      if (timeLeft <= 0) {
        clearInterval(timer);
        _('feedback').style.color = 'var(--wrong-color)';
        _('feedback').textContent = `Time's up! The correct answer was ${countriesData[currentIndex].country}.`;
        _('feedback').style.opacity = 1;
        consecutiveCorrectAnswers = 0;
        comboMultiplier = 1;
        _('multiplier').textContent = `Combo Multiplier: x${comboMultiplier}`;
        _('timer-container').classList.remove('flash'); // Remove flash class when time is up
        if (round >= totalRounds) {
          _('feedback').textContent += ` Game over! Your final score is ${score}.`;
          _('restart-game').style.display = 'block'; // Show restart button
        } else {
          updateRound();
        }
      }
    }, 1000);
  };

  const updateTimer = () => {
    const circleDasharray = `${(fullDashArray * timeLeft) / timeLimit} ${fullDashArray}`;
    _('timer').style.strokeDasharray = circleDasharray;
  };

  // Display the flag based on the current index
  const displayFlag = (index) => {
    const isoCode = countriesData[index].iso.toLowerCase();
    const cardHtml = `<div class="card" id="card${index}" style="background-image:url('images/${isoCode}.png')"></div>`;
    _('demo').innerHTML = cardHtml;
    clearInterval(timer);
    startTimer();
  };

  // Check the user's guess
  const checkGuess = () => {
    const userGuess = _('guess-input').value.trim().toLowerCase();
    const correctAnswer = countriesData[currentIndex].country.toLowerCase();

    if (userGuess === correctAnswer) {
      score += timeLeft; // Score based on remaining time
      _('feedback').style.color = 'var(--correct-color)';
      _('feedback').textContent = 'Correct!';
    } else {
      _('feedback').style.color = 'var(--wrong-color)';
      _('feedback').textContent = `Wrong! The correct answer was ${countriesData[currentIndex].country}.`;
    }
    _('feedback').style.opacity = 1;
    if (round >= totalRounds) {
      _('feedback').textContent += ` Game over! Your final score is ${score}.`;
      _('restart-game').style.display = 'block'; // Show restart button
    } else {
      updateRound();
    }
  };

  // Update the round and score
  const updateRound = () => {
    clearInterval(timer);
    round++;
    _('score').textContent = `Score: ${score}`;
    _('round').textContent = `Round: ${round}/${totalRounds}`;

    setTimeout(() => {
      _('feedback').style.opacity = 0;
      nextFlag();
    }, 2000);
  };

  // Restart the game
  const restartGame = () => {
    score = 0;
    round = 1;
    _('score').textContent = `Score: ${score}`;
    _('round').textContent = `Round: ${round}/${totalRounds}`;
    _('feedback').textContent = '';
    _('restart-game').style.display = 'none'; // Hide restart button
    nextFlag();
  };

  // Move to the next flag
  const nextFlag = () => {
    _('guess-input').value = '';
    _('guess-input').selectedIndex = 0; // Reset dropdown to default value
    currentIndex = Math.floor(Math.random() * countriesData.length); // Randomize the selection of the next flag
    displayFlag(currentIndex);
  };

  // Event listeners for the submit and restart buttons
  _('submit-guess').addEventListener('click', checkGuess);
  _('guess-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      checkGuess();
    }
  });
  _('restart-game').addEventListener('click', restartGame);

  // Initialize the game by fetching the countries data
  fetchCountriesData();
});

