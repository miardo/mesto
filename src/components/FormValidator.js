export default class FormValidator {
    constructor(allValidation, formElement) {
        this._formSelector = allValidation.formSelector;
        this._inputSelector = allValidation.inputSelector;
        this._submitButtonSelector = allValidation.submitButtonSelector;
        this._inactiveButtonClass = allValidation.inactiveButtonClass;
        this._inputErrorClass = allValidation.inputErrorClass;
        this._errorClass = allValidation.errorClass;
        this._formElement = formElement;
        this._formList = Array.from(this._formElement.querySelectorAll(this._formSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }

    _showInputError = (formElement, inputElement, errorMessage) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError = (formElement, inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _isValid = (formElement, inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(formElement, inputElement);
        }
    };

    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    disabledButton = () => {
        this._buttonElement.setAttribute('disabled', true);
        this._buttonElement.classList.add(this._inactiveButtonClass);
    }

    _toggleButtonState = (inputList) => {
        if (this._hasInvalidInput(inputList)) {
            this.disabledButton();
        } else {
            this._buttonElement.removeAttribute('disabled');
            this._buttonElement.classList.remove(this._inactiveButtonClass);
        }
    };

    _setEventListeners = () => {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(this._formElement, inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    };

    enableValidation = () => {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    };

}