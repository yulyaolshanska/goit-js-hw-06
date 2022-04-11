// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.
//  Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputEl = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

function changeOutput(event) {
    nameLabel.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        nameLabel.textContent = "Anonymous";
        
    }

}
inputEl.addEventListener("input", changeOutput);

