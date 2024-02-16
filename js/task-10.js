function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userControls = document.querySelector('#controls');
const setObject = document.querySelector('#boxes');

// Функция создания боксов
const boxes = createBoxes(amount) {
  
};

// Функция удаления боксов
const deleteBoxes = destroyBoxes() {
 
};