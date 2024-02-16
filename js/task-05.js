const textInput = document.querySelector("#name-input"); // Ищем поле ввода
const output = document.querySelector("#name-output");   // Ищем место трансляции текста

// Слушатель и обработчик событий
textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});