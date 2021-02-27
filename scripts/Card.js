import {openImage} from './index.js';

export default class Card {
    constructor(data, cardSelector) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.elements__box')
        .cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        const templateBoxImage = this._element.querySelector('.elements__photo');
        templateBoxImage.alt = this._name;
        templateBoxImage.src = this._link;
        this._element.querySelector('.elements__text').innerText = this._name;
        return this._element;
    }

    _openingImage() {
        openImage(this._data)
    }

    _setEventListeners() {
        this._element.querySelector('.elements__delete-button').addEventListener('click', function(evt){
        evt.target.closest('.elements__box').remove();
        });
        this._element.querySelector('.elements__button').addEventListener('click', function (evt){
        evt.target.classList.toggle('elements__button_active');
        });
        this._element.querySelector('.elements__photo').addEventListener('click', () => {
            this._openingImage()
            });
    }
};
