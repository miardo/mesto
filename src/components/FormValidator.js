export default class FormValidator {
    constructor(allValidation, formElement){
        this._formSelector = allValidation.formSelector;
        this._inputSelector = allValidation.inputSelector;
        this._submitButtonSelector = allValidation.submitButtonSelector;
        this._inactiveButtonClass = allValidation.inactiveButtonClass;
        this._inputErrorClass = allValidation.inputErrorClass;
        this._errorClass = allValidation.errorClass;
        this._formElement = formElement;
        this._formList = Array.from(this._formElement.querySelectorAll(this._formSelector));
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

    _toggleButtonState = (inputList, buttonElement) => {
        if (this._hasInvalidInput(inputList)) {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add(this._inactiveButtonClass);
        } else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove(this._inactiveButtonClass);
        }
    }; 

    _setEventListeners = (formElement) => {
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

