import './style.css';

const field = document.createElement('div');
field.className = 'field';
document.body.append(field);

// 16 ячеек 4x4
for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  field.append(cell);
}

const goblin = document.createElement('img');
goblin.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/AHJ-50/dom/pic/goblin.png';
goblin.className = 'goblin';
goblin.alt = 'goblin';

const cells = document.querySelectorAll('.cell');
let currentPos = 0;

function getRandomPos() {
  let newPos;
  do {
    newPos = Math.floor(Math.random() * 16);
  } while (newPos === currentPos);
  return newPos;
}

function moveGoblin() {
  const newPos = getRandomPos();
  cells[newPos].append(goblin); // ✅ БЕЗ removeChild!
  currentPos = newPos;
}

// Запуск
cells[0].append(goblin);
setInterval(moveGoblin, 1000);
