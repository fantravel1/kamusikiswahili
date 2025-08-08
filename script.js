// Word Matching Game: English ↔ Swahili
// Designed for mobile responsiveness and touch interaction

const words = [
  { english: "Hello", swahili: "Habari" },
  { english: "Thank you", swahili: "Asante" },
  { english: "Goodbye", swahili: "Kwaheri" },
  { english: "Yes", swahili: "Ndiyo" },
  { english: "No", swahili: "Hapana" },
  { english: "Please", swahili: "Tafadhali" },
  { english: "Water", swahili: "Maji" },
  { english: "Food", swahili: "Chakula" }
];

let englishOptions = [];
let swahiliOptions = [];
let selectedEnglish = null;
let selectedSwahili = null;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function generateGame() {
  const gameContainer = document.getElementById('game');
  gameContainer.innerHTML = '';

  // Add "Go Back" button
  const backButton = document.createElement('button');
  backButton.textContent = '⬅️ Go Back';
  backButton.className = 'back-button';
  backButton.onclick = () => window.location.href = 'index.html';
  gameContainer.appendChild(backButton);

  englishOptions = shuffle([...words]);
  swahiliOptions = shuffle([...words]);

  const englishColumn = document.createElement('div');
  const swahiliColumn = document.createElement('div');
  englishColumn.className = 'column';
  swahiliColumn.className = 'column';

  englishOptions.forEach((item, index) => {
    const btn = document.createElement('button');
    btn.textContent = item.english;
    btn.className = 'word-button';
    btn.onclick = () => handleSelection('english', index);
    englishColumn.appendChild(btn);
  });

  swahiliOptions.forEach((item, index) => {
    const btn = document.createElement('button');
    btn.textContent = item.swahili;
    btn.className = 'word-button';
    btn.onclick = () => handleSelection('swahili', index);
    swahiliColumn.appendChild(btn);
  });

  gameContainer.appendChild(englishColumn);
  gameContainer.appendChild(swahiliColumn);
}

function handleSelection(type, index) {
  if (type === 'english') {
    selectedEnglish = index;
  } else {
    selectedSwahili = index;
  }

  if (selectedEnglish !== null && selectedSwahili !== null) {
    const eng = englishOptions[selectedEnglish];
    const swa = swahiliOptions[selectedSwahili];
    if (eng.swahili === swa.swahili) {
      alert('Correct Match!');
    } else {
      alert('Incorrect. Try Again!');
    }
    selectedEnglish = null;
    selectedSwahili = null;
  }
}

document.addEventListener('DOMContentLoaded', generateGame);