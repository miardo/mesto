let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');

    editButton.addEventListener('click', function () { 
        popup.classList.add('popup_opened');
    });

let closeButton = document.querySelector('.popup__container-close-button');

    closeButton.addEventListener('click', function () {
        popup.classList.remove('popup_opened');
    });

    // Находим форму в DOM
let formElement = document.querySelector('.popup__container'); // Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
    function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = document.querySelector('.popup__container-name-input'); // Воспользуйтесь инструментом .querySelector()
    let jobInput = document.querySelector('.popup__container-job-input'); // Воспользуйтесь инструментом .querySelector()

    // Получите значение полей из свойства value
    nameInput.value;
    jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    let nameText = document.querySelector('.profile__name-text');
    let jobText = document.querySelector('.profile__description');

    // Вставьте новые значения с помощью textContent
    nameText.textContent = nameInput.value;
    jobText.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
    formElement.addEventListener('submit', handleFormSubmit);

let submitButton = document.querySelector('.popup__container-submit-button');

    submitButton.addEventListener('click', function () {
        popup.classList.remove('popup_opened');
});