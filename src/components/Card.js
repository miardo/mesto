export default class Card {
    constructor({ data, cardSelector, handleCardClick, handleLikeClick, handleDeleteClick}, userId) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._owner = data.owner;
        this._userId = userId;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteClick = handleDeleteClick;
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
        this._element.querySelector('.elements__text').textContent = this._name;
        if (this._data.likes !== undefined) {
            this._element.querySelector('.elements__likes-counter').textContent = this._likes.length;
        }
        if (this.findLike()) {
            this._addLike();
        }
        if (!this._owner) {
        } else if (this._owner._id !== this._userId) {
            this._element.querySelector('.elements__delete-button').remove();
        }
        return this._element;
    }

    findLike() {
        return this._likes.some((like) => {
            return like._id === this._userId
        })     
    }

    _addLike() {
        this._element.querySelector('.elements__button').classList.toggle('elements__button_active');
    }

    likeCard(likes) {
        this._addLike();
        this._element.querySelector('.elements__likes-counter').textContent = likes;
    }

    deleteCard() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._element.querySelector('.elements__delete-button').addEventListener('click', () => {
            this._handleDeleteClick()
        });
        this._element.querySelector('.elements__button').addEventListener('click', () => {
            this._handleLikeClick()
        });
        this._element.querySelector('.elements__photo').addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    }
};