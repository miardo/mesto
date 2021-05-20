export const elements = document.querySelector('.elements');
export const profileFormButton = document.querySelector('.profile__edit-button');
export const addFormButton = document.querySelector('.profile__add-button');
export const editAvatarButton = document.querySelector('.profile__edit-photo-button');
export const profileForm = document.querySelector('[name="profile-form"]');
export const addForm = document.querySelector('[name="add-form"]');
export const avatarForm = document.querySelector('[name="ava-form"]');
export const nameInput = document.querySelector('[name="name"]');
export const jobInput = document.querySelector('[name="about"]');
export const popupConfirm = document.querySelector('.popup_type_delete-card');
export const popupMax = document.querySelector('.popup_type_show-image');
export const popupProfileForm = document.querySelector('.popup_type_edit-form');
export const popupAddForm = document.querySelector('.popup_type_add-card');
export const popupAvatarForm = document.querySelector('.popup_type_upd-ava');


export const profileName = '.profile__name-text';
export const profileDescription = '.profile__description';
export const template = '.item_template';

export const validationConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__container-input',
    submitButtonSelector: '.popup__container-submit-button',
    inactiveButtonClass: 'popup__container-submit-button_inactive',
    inputErrorClass: 'popup__container-input_type_error',
    errorClass: 'popup__container-input-error_visible'
}