// Swahili Quiz & Flashcard System

const vocabulary = [
  { swahili: "Habari", english: "Hello/How are you" },
  { swahili: "Asante", english: "Thank you" },
  { swahili: "Kwaheri", english: "Goodbye" },
  { swahili: "Ndiyo", english: "Yes" },
  { swahili: "Hapana", english: "No" },
  { swahili: "Tafadhali", english: "Please" },
  { swahili: "Maji", english: "Water" },
  { swahili: "Chakula", english: "Food" },
  { swahili: "Upendo", english: "Love" },
  { swahili: "Amani", english: "Peace" },
  { swahili: "Rafiki", english: "Friend" },
  { swahili: "Familia", english: "Family" },
  { swahili: "Kitabu", english: "Book" },
  { swahili: "Shule", english: "School" },
  { swahili: "Mwalimu", english: "Teacher" },
  { swahili: "Nzuri", english: "Good" },
  { swahili: "Mbaya", english: "Bad" },
  { swahili: "Kubwa", english: "Big" },
  { swahili: "Ndogo", english: "Small" },
  { swahili: "Haraka", english: "Fast" },
  { swahili: "Pole", english: "Slowly/Sorry" },
  { swahili: "Karibu", english: "Welcome" },
  { swahili: "Mama", english: "Mother" },
  { swahili: "Baba", english: "Father" },
  { swahili: "Mtoto", english: "Child" },
  { swahili: "Kaka", english: "Brother" },
  { swahili: "Dada", english: "Sister" },
  { swahili: "Nyumba", english: "House" },
  { swahili: "Gari", english: "Car" },
  { swahili: "Baiskeli", english: "Bicycle" }
];

let currentMode = 'flashcard';
let currentCardIndex = 0;
let isFlipped = false;
let correctCount = 0;
let incorrectCount = 0;
let currentQuestionIndex = 0;
let quizWords = [];
let answeredQuestions = 0;

// Text-to-Speech
function speak(text, lang = 'sw') {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'sw' ? 'sw-KE' : 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
}

// Shuffle array
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Update stats
function updateStats() {
  const total = correctCount + incorrectCount;
  const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  document.getElementById('correct').textContent = correctCount;
  document.getElementById('incorrect').textContent = incorrectCount;
  document.getElementById('accuracy').textContent = accuracy + '%';

  if (currentMode === 'flashcard') {
    document.getElementById('progress').textContent = `${currentCardIndex + 1}/${vocabulary.length}`;
  } else {
    document.getElementById('progress').textContent = `${answeredQuestions}/${quizWords.length}`;
  }
}

// ========== FLASHCARD MODE ==========

function displayFlashcard() {
  const card = vocabulary[currentCardIndex];
  const flashcard = document.getElementById('flashcard');

  flashcard.classList.remove('flipped');
  isFlipped = false;

  document.getElementById('frontWord').textContent = card.swahili;
  document.getElementById('backWord').textContent = card.english;

  updateStats();
  updateNavigationButtons();
}

function updateNavigationButtons() {
  document.getElementById('prevCard').disabled = currentCardIndex === 0;
  document.getElementById('nextCard').disabled = currentCardIndex === vocabulary.length - 1;
}

function flipCard() {
  const flashcard = document.getElementById('flashcard');
  flashcard.classList.toggle('flipped');
  isFlipped = !isFlipped;
}

function nextCard() {
  if (currentCardIndex < vocabulary.length - 1) {
    currentCardIndex++;
    displayFlashcard();
  }
}

function prevCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    displayFlashcard();
  }
}

function shuffleCards() {
  vocabulary.sort(() => Math.random() - 0.5);
  currentCardIndex = 0;
  displayFlashcard();
}

// ========== QUIZ MODE ==========

function startQuiz() {
  currentQuestionIndex = 0;
  answeredQuestions = 0;
  quizWords = shuffle([...vocabulary]).slice(0, 10); // 10 questions
  displayQuestion();
  updateStats();
}

function displayQuestion() {
  if (currentQuestionIndex >= quizWords.length) {
    showResults();
    return;
  }

  const currentWord = quizWords[currentQuestionIndex];
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');

  // Random: ask in Swahili or English
  const askInSwahili = Math.random() > 0.5;

  if (askInSwahili) {
    questionEl.textContent = `What does "${currentWord.swahili}" mean in English?`;
  } else {
    questionEl.textContent = `How do you say "${currentWord.english}" in Swahili?`;
  }

  // Generate options
  const correctAnswer = askInSwahili ? currentWord.english : currentWord.swahili;
  const wrongOptions = vocabulary
    .filter(w => w !== currentWord)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(w => askInSwahili ? w.english : w.swahili);

  const allOptions = shuffle([correctAnswer, ...wrongOptions]);

  // Display options
  optionsEl.innerHTML = '';
  allOptions.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option, correctAnswer, btn);
    optionsEl.appendChild(btn);
  });

  document.getElementById('nextQuestion').classList.add('hidden');
}

function checkAnswer(selected, correct, button) {
  const isCorrect = selected === correct;

  // Disable all options
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.classList.add('disabled');
  });

  if (isCorrect) {
    button.classList.add('correct');
    correctCount++;
    speak(selected, currentMode === 'flashcard' ? 'sw' : (Math.random() > 0.5 ? 'sw' : 'en'));
  } else {
    button.classList.add('incorrect');
    incorrectCount++;

    // Highlight correct answer
    document.querySelectorAll('.option-btn').forEach(btn => {
      if (btn.textContent === correct) {
        btn.classList.add('correct');
      }
    });
  }

  answeredQuestions++;
  updateStats();

  // Show next button
  document.getElementById('nextQuestion').classList.remove('hidden');
}

function nextQuestion() {
  currentQuestionIndex++;
  displayQuestion();
}

function showResults() {
  const total = correctCount + incorrectCount;
  const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  document.getElementById('totalQuestions').textContent = total;
  document.getElementById('correctAnswers').textContent = correctCount;
  document.getElementById('finalAccuracy').textContent = accuracy + '%';

  document.getElementById('resultsModal').classList.remove('hidden');

  // Track quiz completion for achievements
  const progress = JSON.parse(localStorage.getItem('swahili_progress') || '{}');
  progress.quizzesCompleted = (progress.quizzesCompleted || 0) + 1;
  localStorage.setItem('swahili_progress', JSON.stringify(progress));
}

function restartQuiz() {
  document.getElementById('resultsModal').classList.add('hidden');
  correctCount = 0;
  incorrectCount = 0;
  startQuiz();
}

// ========== MODE SWITCHING ==========

function switchMode(mode) {
  currentMode = mode;

  // Update button states
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.mode === mode) {
      btn.classList.add('active');
    }
  });

  // Show/hide content
  document.getElementById('flashcardMode').classList.toggle('hidden', mode !== 'flashcard');
  document.getElementById('quizMode').classList.toggle('hidden', mode === 'flashcard');

  if (mode !== 'flashcard') {
    startQuiz();
  } else {
    displayFlashcard();
  }
}

function resetProgress() {
  correctCount = 0;
  incorrectCount = 0;
  currentCardIndex = 0;
  answeredQuestions = 0;

  if (currentMode === 'flashcard') {
    displayFlashcard();
  } else {
    startQuiz();
  }
}

// ========== INITIALIZATION ==========

document.addEventListener('DOMContentLoaded', () => {
  // Flashcard click to flip
  document.getElementById('flashcard').addEventListener('click', flipCard);

  // Navigation buttons
  document.getElementById('nextCard').addEventListener('click', nextCard);
  document.getElementById('prevCard').addEventListener('click', prevCard);
  document.getElementById('shuffleBtn').addEventListener('click', shuffleCards);

  // Speaker buttons
  document.getElementById('frontSpeaker').addEventListener('click', (e) => {
    e.stopPropagation();
    speak(vocabulary[currentCardIndex].swahili, 'sw');
  });

  document.getElementById('backSpeaker').addEventListener('click', (e) => {
    e.stopPropagation();
    speak(vocabulary[currentCardIndex].english, 'en');
  });

  // Mode switching
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => switchMode(btn.dataset.mode));
  });

  // Next question button
  document.getElementById('nextQuestion').addEventListener('click', nextQuestion);

  // Reset button
  document.getElementById('resetBtn').addEventListener('click', resetProgress);

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (currentMode === 'flashcard') {
      if (e.key === 'ArrowRight') nextCard();
      if (e.key === 'ArrowLeft') prevCard();
      if (e.key === ' ') {
        e.preventDefault();
        flipCard();
      }
    }
  });

  // Initialize
  displayFlashcard();
});
