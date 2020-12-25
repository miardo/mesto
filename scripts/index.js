let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__container-close-button');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('[name="name-input"]');
let jobInput = document.querySelector('[name="job-input"]');
let nameText = document.querySelector('.profile__name-text');
let jobText = document.querySelector('.profile__description');

    function openPopup() {
        popup.classList.add('popup_opened');
    }

    function closePopup() {
        popup.classList.remove('popup_opened');
    }

    function handleFormSubmit (evt) {
        evt.preventDefault();
        nameText.textContent = nameInput.value;
        jobText.textContent = jobInput.value;
        closePopup();
}

    editButton.addEventListener('click', openPopup);
    closeButton.addEventListener('click', closePopup);
    formElement.addEventListener('submit', handleFormSubmit);