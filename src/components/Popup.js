export default class Popup {
    constructor(selector) {
        this._popup = selector;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup_opened') ||
            evt.target.classList.contains('popup__container-close-button')) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('click', this._handleOverlayClose);
    }
}
