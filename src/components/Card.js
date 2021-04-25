export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
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
        this._handleCardClick(this._name, this._link);
    }

    _likeCard() {
        this._element.querySelector('.elements__button').classList.toggle('elements__button_active');
    }

    _deleteCard() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._element.querySelector('.elements__delete-button').addEventListener('click', () => {
            this._deleteCard()
        });
        this._element.querySelector('.elements__button').addEventListener('click', () => {
            this._likeCard()
        });
        this._element.querySelector('.elements__photo').addEventListener('click', () => {
            this._openingImage()
        });
    }
};