import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._imageInput = document.querySelector('.popup__container-image');
        this._descriptionInput = document.querySelector('.popup__container-text');
    }

    open(name, link) {
        this._imageInput.alt = name;
        this._imageInput.src = link;
        this._descriptionInput.textContent = name;
        super.open();
    }

}