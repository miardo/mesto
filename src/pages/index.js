import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {
    elements,
    profileFormButton,
    addFormButton,
    editAvatarButton,
    profileForm,
    addForm,
    avatarForm,
    nameInput,
    jobInput,
    popupConfirm,
    popupMax,
    popupProfileForm,
    popupAddForm,
    popupAvatarForm,
    allValidation,
}
    from '../utils/constants.js';

import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js'

import './index.css';

import Api from '../components/Api.js';

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-24',
    headers: {
        authorization: '3ecdcc3b-e37c-4bc7-86dd-3dd41d1fe90d',
        'Content-Type': 'application/json'
    }
});

const promises = [api.getUserInfo(), api.getInitialCards()]

Promise.all(promises)
    .then(([data, cards]) => {
        userInfo.setUserInfo(data);
        cards.forEach((card) => {
            cardList.addItem(renderCard(card, data._id));
        })
    });

const popupCard = new PopupWithImage(popupMax);
popupCard.setEventListeners();

const popupConfirmPopup = new PopupWithConfirm(popupConfirm);
popupConfirmPopup.setEventListeners();

const userInfo = new UserInfo({
    name: '.profile__name-text',
    about: '.profile__description'
});

const profileFormValidator = new FormValidator(allValidation, profileForm);
const addFormValidator = new FormValidator(allValidation, addForm);
const editAvatarValidator = new FormValidator(allValidation, avatarForm);

const renderCard = function (data, userId) {
    const card = new Card({
        data: data,
        cardSelector: '.item_template',
        handleCardClick: (name, link) => {
            popupCard.open(name, link);
        },
        handleLikeClick: () => {
            if (card.findLike()) {
                api.deleteLike(data._id)
                    .then((data) => {
                        card.likeCard(data.likes.length);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else {
                api.addLikes(data._id)
                    .then((data) => {
                        card.likeCard(data.likes.length);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        },
        handleDeleteClick: () => {
            popupConfirmPopup.open();
            popupConfirmPopup.submitForm(() => {
                api.deleteCard(data._id)
                    .then(() => {
                        card.deleteCard();
                        popupConfirmPopup.close();
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
        }
    },
        userId);
    const cardElement = card.generateCard();
    return cardElement;
};

const popupEditPopup = new PopupWithForm(popupProfileForm, (data) => {
    popupEditPopup.getloadingStatus(true, 'Сохранение...');
    userInfo.setUserInfo(data);
    api.editUserInfo(data)
    .finally(() => {
        popupEditPopup.getloadingStatus(false, 'Сохранить');
    })
    popupEditPopup.close();
});
popupEditPopup.setEventListeners();

const popupAddPopup = new PopupWithForm(popupAddForm, (data) => {
    popupAddPopup.getloadingStatus(true, 'Сохранение...');
    api.addCard(data)
        .then((data) => {
            cardList.addItemPrepend(renderCard(data, userInfo.getUserInfo().userId));
            popupAddPopup.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupAddPopup.getloadingStatus(false, 'Создать');
        })
    addFormValidator.disabledButton();
});
popupAddPopup.setEventListeners();

const popupAvataPopup = new PopupWithForm(popupAvatarForm, (data) => {
    popupAvataPopup.getloadingStatus(true, 'Сохранение...');
    api.addAvatar({ avatar: data.link })
        .then(data => {
            userInfo.setUserInfo(data);
            popupAvataPopup.close();
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            popupAvataPopup.getloadingStatus(false, 'Сохранить');
        })
    editAvatarValidator.disabledButton();
});
popupAvataPopup.setEventListeners();

profileFormValidator.enableValidation();
addFormValidator.enableValidation();
editAvatarValidator.enableValidation();

const cardList = new Section({
    renderer: (data) => {
        cardList.addItem(renderCard(data, userId));
    }
}, elements);

profileFormButton.addEventListener('click', function () {
    const currentUserInfo = userInfo.getUserInfo();
    nameInput.value = currentUserInfo.name;
    jobInput.value = currentUserInfo.about;
    popupEditPopup.open();
});

addFormButton.addEventListener('click', function () {
    popupAddPopup.open();
});

editAvatarButton.addEventListener('click', function () {
    popupAvataPopup.open();
});