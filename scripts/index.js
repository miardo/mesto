import Card from './Card.js';
import FormValidator from './FormValidator.js';

const elements = document.querySelector('.elements');
const nameText = document.querySelector('.profile__name-text');
const jobText = document.querySelector('.profile__description');
const profileFormButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const profileForm = document.querySelector('[name="profile-form"]');
const nameInput = document.querySelector('[name="name-input"]');
const jobInput = document.querySelector('[name="job-input"]');
const addFormButton = document.querySelector('.profile__add-button');
const addForm = document.querySelector('[name="add-form"]');
const addFormNameInput = document.querySelector('[name="add-form-name-input"]');
const addFormImgInput = document.querySelector('[name="add-form-img-input"]');
const imageInput = document.querySelector('.popup__container-image');
const descriptionInput = document.querySelector('.popup__container-text');
const popupMax = document.querySelector('.popup_type_show-image');
const popupProfileForm = document.querySelector('.popup_type_edit-form');
const popupAddForm = document.querySelector('.popup_type_add-card');
const buttonCloseEditForm = document.querySelector('[name="close-edit-form"]');
const buttonCloseImageForm = document.querySelector('[name="close-image"]');
const buttonCloseAddForm = document.querySelector('[name="close-add-card"]');

const allValidation = {
    formSelector: '.popup__container',
    inputSelector: '.popup__container-input',
    submitButtonSelector: '.popup__container-submit-button',
    inactiveButtonClass: 'popup__container-submit-button_inactive',
    inputErrorClass: 'popup__container-input_type_error',
    errorClass: 'popup__container-input-error_visible'
}

const profileFormValidator = new FormValidator(allValidation, profileForm);
const addFormValidator = new FormValidator(allValidation, addForm);

profileFormValidator.enableValidation();
addFormValidator.enableValidation();


function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', useEscape);
    document.addEventListener('click', useClick);
}

function useEscape(evt) {
    const popupOpen = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopup(popupOpen);
    }
}

function useClick(evt) {
    if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
    }
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', useEscape);
    document.removeEventListener('click', useClick);
}

function openProfileForm() {
    nameInput.value = nameText.textContent;
    jobInput.value = jobText.textContent;
    openPopup(popupProfileForm);
}

function renderProfile (evt) {
    evt.preventDefault();
    nameText.textContent = nameInput.value;
    jobText.textContent = jobInput.value;
    closePopup(popupProfileForm);
}

initialCards.reverse().forEach((data) => {
    elements.prepend(createdCard(data));
}); 

function createdCard(data) {
    const card = new Card(data, '.item_template');
    const cardElement = card.generateCard();
    return cardElement;
}

function addCard (evt) {
    evt.preventDefault();
    const cardElement = createdCard({
        name: addFormNameInput.value,
        link: addFormImgInput.value
    });
    elements.prepend(cardElement);
    closePopup(popupAddForm);
    addForm.reset();
    const submitButton = addForm.querySelector('.popup__container-submit-button');
    submitButton.classList.add('popup__container-submit-button_inactive');
    submitButton.setAttribute('disabled', true);
} 

export function openImage(data) {
    imageInput.src = data.link;
    imageInput.alt = data.name;
    descriptionInput.textContent = data.name;
    openPopup(popupMax);
}

buttonCloseEditForm.addEventListener('click', function () {
    closePopup(popupProfileForm);
});

buttonCloseImageForm.addEventListener('click', function () {
    closePopup(popupMax);
});

buttonCloseAddForm.addEventListener('click', function () {
    closePopup(popupAddForm); 
});

addFormButton.addEventListener('click', function () {
    openPopup(popupAddForm);
});

addForm.addEventListener('submit', addCard);
profileFormButton.addEventListener('click', openProfileForm);
profileForm.addEventListener('submit', renderProfile);