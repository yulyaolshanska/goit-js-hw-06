// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const controlInput = document.querySelector("#font-size-control");
const controlText = document.querySelector("#text");

controlInput.addEventListener("input", (event) => {
    controlText.style.fontSize = `${event.currentTarget.value}px`;
});


