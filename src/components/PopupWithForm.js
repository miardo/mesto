import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(selector, formSubmit) {
        super(selector)
        this._submit = formSubmit;
        this._form = this._popup.querySelector('.popup__container');
    }

    _getInputValues() {
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__container-input'));
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submit(this._getInputValues());
        });
    }

    close() {
        this._form.reset();
        super.close();
    }

}