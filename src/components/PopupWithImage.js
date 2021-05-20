import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._imageInput = this._popup.querySelector('.popup__container-image');
        this._descriptionInput = this._popup.querySelector('.popup__container-text');
    }

    open(name, link) {
        this._imageInput.alt = name;
        this._imageInput.src = link;
        this._descriptionInput.textContent = name;
        super.open();
    }

}