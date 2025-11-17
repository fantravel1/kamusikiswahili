// Enhanced Swahili Matching Game with Scoring, Timing, and Visual Feedback

const allWords = [
  { english: "Hello", swahili: "Habari" },
  { english: "Thank you", swahili: "Asante" },
  { english: "Goodbye", swahili: "Kwaheri" },
  { english: "Yes", swahili: "Ndiyo" },
  { english: "No", swahili: "Hapana" },
  { english: "Please", swahili: "Tafadhali" },
  { english: "Water", swahili: "Maji" },
  { english: "Food", swahili: "Chakula" },
  { english: "Love", swahili: "Upendo" },
  { english: "Peace", swahili: "Amani" },
  { english: "Friend", swahili: "Rafiki" },
  { english: "Family", swahili: "Familia" },
  { english: "Book", swahili: "Kitabu" },
  { english: "School", swahili: "Shule" },
  { english: "Teacher", swahili: "Mwalimu" },
  { english: "Good", swahili: "Nzuri" },
  { english: "Bad", swahili: "Mbaya" },
  { english: "Big", swahili: "Kubwa" },
  { english: "Small", swahili: "Ndogo" },
  { english: "Fast", swahili: "Haraka" }
];

let gameWords = [];
let englishOptions = [];
let swahiliOptions = [];
let selectedEnglish = null;
let selectedSwahili = null;
let score = 0;
let matches = 0;
let totalMatches = 0;
let currentStreak = 0;
let bestStreak = 0;
let startTime = null;
let timerInterval = null;

// Difficulty settings
const difficulties = {
  easy: 5,
  medium: 8,
  hard: 12
};

// Utility: Shuffle array
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Format time as MM:SS
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Start timer
function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('timer').textContent = formatTime(elapsed);
  }, 1000);
}

// Stop timer
function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

// Update score display
function updateScore(points) {
  score += points;
  document.getElementById('score').textContent = score;
}

// Update streak
function updateStreak(correct) {
  if (correct) {
    currentStreak++;
    if (currentStreak > bestStreak) {
      bestStreak = currentStreak;
    }
  } else {
    currentStreak = 0;
  }
  document.getElementById('streak').textContent = currentStreak;
}

// Update matches display
function updateMatches() {
  document.getElementById('matches').textContent = `${matches}/${totalMatches}`;
}

// Generate game
function generateGame() {
  const difficulty = document.getElementById('difficulty').value;
  const wordCount = difficulties[difficulty];

  // Reset game state
  score = 0;
  matches = 0;
  currentStreak = 0;
  bestStreak = 0;
  selectedEnglish = null;
  selectedSwahili = null;

  // Select random words
  const shuffledWords = shuffle(allWords);
  gameWords = shuffledWords.slice(0, wordCount);
  totalMatches = gameWords.length;

  // Create shuffled options
  englishOptions = shuffle([...gameWords]);
  swahiliOptions = shuffle([...gameWords]);

  // Update displays
  document.getElementById('score').textContent = '0';
  document.getElementById('matches').textContent = `0/${totalMatches}`;
  document.getElementById('streak').textContent = '0';
  document.getElementById('timer').textContent = '0:00';

  // Build UI
  renderGame();

  // Start timer
  stopTimer();
  startTimer();
}

// Render game UI
function renderGame() {
  const gameContainer = document.getElementById('game');
  gameContainer.innerHTML = '';

  // English column
  const englishColumn = document.createElement('div');
  englishColumn.className = 'column';

  const englishHeader = document.createElement('div');
  englishHeader.className = 'column-header';
  englishHeader.textContent = '🇬🇧 English';
  englishColumn.appendChild(englishHeader);

  englishOptions.forEach((item, index) => {
    const btn = document.createElement('button');
    btn.textContent = item.english;
    btn.className = 'word-button';
    btn.dataset.index = index;
    btn.dataset.type = 'english';
    btn.onclick = () => handleSelection('english', index, btn);
    englishColumn.appendChild(btn);
  });

  // Swahili column
  const swahiliColumn = document.createElement('div');
  swahiliColumn.className = 'column';

  const swahiliHeader = document.createElement('div');
  swahiliHeader.className = 'column-header';
  swahiliHeader.textContent = '🇹🇿 Kiswahili';
  swahiliColumn.appendChild(swahiliHeader);

  swahiliOptions.forEach((item, index) => {
    const btn = document.createElement('button');
    btn.textContent = item.swahili;
    btn.className = 'word-button';
    btn.dataset.index = index;
    btn.dataset.type = 'swahili';
    btn.onclick = () => handleSelection('swahili', index, btn);
    swahiliColumn.appendChild(btn);
  });

  gameContainer.appendChild(englishColumn);
  gameContainer.appendChild(swahiliColumn);
}

// Handle selection
function handleSelection(type, index, button) {
  // Prevent selecting matched buttons
  if (button.classList.contains('matched')) return;

  if (type === 'english') {
    // Deselect previous English selection
    if (selectedEnglish !== null && selectedEnglish.index !== index) {
      selectedEnglish.button.classList.remove('selected');
    }

    // Toggle selection
    if (selectedEnglish && selectedEnglish.index === index) {
      selectedEnglish = null;
      button.classList.remove('selected');
    } else {
      selectedEnglish = { index, button };
      button.classList.add('selected');
    }
  } else {
    // Deselect previous Swahili selection
    if (selectedSwahili !== null && selectedSwahili.index !== index) {
      selectedSwahili.button.classList.remove('selected');
    }

    // Toggle selection
    if (selectedSwahili && selectedSwahili.index === index) {
      selectedSwahili = null;
      button.classList.remove('selected');
    } else {
      selectedSwahili = { index, button };
      button.classList.add('selected');
    }
  }

  // Check for match when both are selected
  if (selectedEnglish !== null && selectedSwahili !== null) {
    checkMatch();
  }
}

// Check if selections match
function checkMatch() {
  const eng = englishOptions[selectedEnglish.index];
  const swa = swahiliOptions[selectedSwahili.index];

  const isCorrect = eng.swahili === swa.swahili;

  if (isCorrect) {
    // Correct match!
    selectedEnglish.button.classList.remove('selected');
    selectedEnglish.button.classList.add('correct');
    selectedSwahili.button.classList.remove('selected');
    selectedSwahili.button.classList.add('correct');

    // Update score and streak
    const streakBonus = Math.floor(currentStreak / 3) * 5;
    const points = 10 + streakBonus;
    updateScore(points);
    updateStreak(true);

    matches++;
    updateMatches();

    // Mark as matched after animation
    setTimeout(() => {
      selectedEnglish.button.classList.remove('correct');
      selectedEnglish.button.classList.add('matched');
      selectedSwahili.button.classList.remove('correct');
      selectedSwahili.button.classList.add('matched');

      selectedEnglish = null;
      selectedSwahili = null;

      // Check if game is complete
      if (matches === totalMatches) {
        setTimeout(showCongratsModal, 500);
      }
    }, 800);

  } else {
    // Incorrect match
    selectedEnglish.button.classList.remove('selected');
    selectedEnglish.button.classList.add('incorrect');
    selectedSwahili.button.classList.remove('selected');
    selectedSwahili.button.classList.add('incorrect');

    // Deduct points for wrong match
    updateScore(-3);
    updateStreak(false);

    // Reset after animation
    setTimeout(() => {
      selectedEnglish.button.classList.remove('incorrect');
      selectedSwahili.button.classList.remove('incorrect');
      selectedEnglish = null;
      selectedSwahili = null;
    }, 600);
  }
}

// Show congratulations modal
function showCongratsModal() {
  stopTimer();

  const elapsed = Math.floor((Date.now() - startTime) / 1000);

  document.getElementById('finalScore').textContent = score;
  document.getElementById('finalTime').textContent = formatTime(elapsed);
  document.getElementById('finalStreak').textContent = bestStreak;

  document.getElementById('congratsModal').classList.remove('hidden');
}

// Track game plays for achievements
function trackGamePlay() {
  const progress = JSON.parse(localStorage.getItem('swahili_progress') || '{}');
  progress.gamesPlayed = (progress.gamesPlayed || 0) + 1;
  localStorage.setItem('swahili_progress', JSON.stringify(progress));
}

// Initialize game on page load
document.addEventListener('DOMContentLoaded', () => {
  generateGame();
  trackGamePlay(); // Track that a game was started

  // New game button
  document.getElementById('newGame').addEventListener('click', generateGame);

  // Difficulty change
  document.getElementById('difficulty').addEventListener('change', generateGame);
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'n' || e.key === 'N') {
    generateGame();
  }
  if (e.key === 'Escape') {
    // Deselect all
    if (selectedEnglish) {
      selectedEnglish.button.classList.remove('selected');
      selectedEnglish = null;
    }
    if (selectedSwahili) {
      selectedSwahili.button.classList.remove('selected');
      selectedSwahili = null;
    }
  }
});
