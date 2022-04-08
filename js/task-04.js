// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueText = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", decrementValue)
incrementBtn.addEventListener("click", incrementValue)

function decrementValue() {
    counterValue -= 1;
    valueText.textContent = counterValue;

}

function incrementValue() {
    counterValue += 1;
    valueText.textContent = counterValue;
  

}

