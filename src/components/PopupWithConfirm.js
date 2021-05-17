import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor(selector) {
        super(selector)
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submit();
        });
    }

    submitForm(submit) {
        this._submit = submit;
    }

    close() {
        super.close();
    }

}