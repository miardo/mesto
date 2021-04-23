import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {
    elements,
    profileFormButton,
    profileForm,
    nameInput,
    jobInput,
    addFormButton,
    addForm,
    popupMax,
    popupProfileForm,
    popupAddForm,
    allValidation,
    initialCards}
from '../utils/constants.js';

import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

import './index.css';

const popupCard = new PopupWithImage(popupMax);
popupCard.setEventListeners();

const handleCardClick = function (name, link) {
    popupCard.open(name, link);
};

const userInfo = new UserInfo({
    name: '.profile__name-text',
    info: '.profile__description'
});

const popupEditPopup = new PopupWithForm(popupProfileForm, (data) => {
    userInfo.setUserInfo(data);
    popupEditPopup.close();
});
popupEditPopup.setEventListeners();

const popupAddPopup = new PopupWithForm(popupAddForm, (data) => {
    const card = new Card(data, '.item_template', handleCardClick);
    const cardElement = card.generateCard();
    cardList.addItemPrepend(cardElement);
    popupAddPopup.close();
});
popupAddPopup.setEventListeners();

const profileFormValidator = new FormValidator(allValidation, profileForm);
const addFormValidator = new FormValidator(allValidation, addForm);

profileFormValidator.enableValidation();
addFormValidator.enableValidation();

const cardList = new Section({
    items: initialCards,
    renderer: (data) => {
        const card = new Card(data, '.item_template', handleCardClick);
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
    }
}, elements);

cardList.renderItems();

profileFormButton.addEventListener('click', function () {
    const currentUserInfo = userInfo.getUserInfo(); 
    nameInput.value = currentUserInfo.name;
    jobInput.value = currentUserInfo.info;
    popupEditPopup.open();
});

addFormButton.addEventListener('click', function () {
    popupAddPopup.open();
});