export const elements = document.querySelector('.elements');
export const profileFormButton = document.querySelector('.profile__edit-button');
export const profileForm = document.querySelector('[name="profile-form"]');
export const nameInput = document.querySelector('[name="name"]');
export const jobInput = document.querySelector('[name="info"]');
export const addFormButton = document.querySelector('.profile__add-button');
export const addForm = document.querySelector('[name="add-form"]');
export const popupMax = document.querySelector('.popup_type_show-image');
export const popupProfileForm = document.querySelector('.popup_type_edit-form');
export const popupAddForm = document.querySelector('.popup_type_add-card');

export const allValidation = {
    formSelector: '.popup__container',
    inputSelector: '.popup__container-input',
    submitButtonSelector: '.popup__container-submit-button',
    inactiveButtonClass: 'popup__container-submit-button_inactive',
    inputErrorClass: 'popup__container-input_type_error',
    errorClass: 'popup__container-input-error_visible'
}

export const initialCards = [
    {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];