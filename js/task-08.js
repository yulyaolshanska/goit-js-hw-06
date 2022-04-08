// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
// где имя поля будет именем свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onFormSubmit )

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    if (formElements.email.value === "" || formElements.password.value === "") {
        return alert("Все поля должны быть заполнены!")
    }

    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        email,
        password,
    }
     console.log(formData);
     event.currentTarget.reset();

 
    // const formData = new FormData(event.currentTarget);
    // const entries = {}
    // formData.forEach(( value,name) =>  (entries[name] = value));
    
    // console.log(entries)

    // 
}
