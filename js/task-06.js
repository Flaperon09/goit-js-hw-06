const textInput = document.querySelector('#validation-input'); // Ищем поле ввода
let symbols = '';

textInput.addEventListener("input", (event) => {
    symbols = event.currentTarget.value;
    console.log(symbols);
});

textInput.addEventListener("blur", () => {
    const arraySymbols = symbols.split('');
    console.log(arraySymbols);
    if (arraySymbols.length === 0) {
    textInput.id = 'validation-input';
    } else if (arraySymbols.length <= textInput.getAttribute('data-length')) {
        textInput.id = 'validation-input valid';
    } else {
        textInput.id = 'validation-input invalid';
    };
    
});
console.log(textInput);
console.log(textInput.getAttribute('data-length'));