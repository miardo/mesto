const formElement = document.querySelector('.popup__container');
const inputElement = formElement.querySelector('.popup__container-input');
const formError = formElement.querySelector('.popup__container-input-error');

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
    hideInputError(formElement, inputElement);
    }
}; 

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__container-input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__container-input-error_visible');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__container-input_type_error');
    errorElement.classList.remove('popup__container-input-error_visible');
    errorElement.textContent = '';
}; 

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    })
}; 

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__container-submit-button_inactive');
    buttonElement.setAttribute('disabled', true);
    } else {
    buttonElement.classList.remove('popup__container-submit-button_inactive');
    buttonElement.removeAttribute('disabled');
    }
}; 

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(`.popup__container-input`));
    const buttonElement = formElement.querySelector('.popup__container-submit-button');
    inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
    });
    });
}; 

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup'));
    formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });

    setEventListeners(formElement);
    });
};

enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__container-input',
    submitButtonSelector: '.popup__container-submit-button',
    inactiveButtonClass: 'popup__container-submit-button_inactive',
    inputErrorClass: 'popup__container-input-error',
    errorClass: 'popup__container-input-error_visible'
});