
const allValidation = {
    formSelector: '.popup__container',
    inputSelector: '.popup__container-input',
    submitButtonSelector: '.popup__container-submit-button',
    inactiveButtonClass: 'popup__container-submit-button_inactive',
    inputErrorClass: 'popup__container-input_type_error',
    errorClass: 'popup__container-input-error_visible'
}

const showInputError = (formElement, inputElement, errorMessage, allValidation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(allValidation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(allValidation.errorClass);
};

const hideInputError = (formElement, inputElement, allValidation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(allValidation.inputErrorClass);
    errorElement.classList.remove(allValidation.errorClass);
    errorElement.textContent = '';
}; 

const isValid = (formElement, inputElement, allValidation) => {
    if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, allValidation);
    } else {
    hideInputError(formElement, inputElement, allValidation);
    }
}; 

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    })
}; 

const toggleButtonState = (inputList, buttonElement, allValidation) => {
    if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(allValidation.inactiveButtonClass);
    } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(allValidation.inactiveButtonClass);
    }
}; 

const setEventListeners = (formElement, allValidation) => {
    const inputList = Array.from(formElement.querySelectorAll(allValidation.inputSelector));
    const buttonElement = formElement.querySelector(allValidation.submitButtonSelector);
    inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement, allValidation);
        toggleButtonState(inputList, buttonElement, allValidation);
    });
    });
}; 

const enableValidation = (allValidation) => {
    const formList = Array.from(document.querySelectorAll(allValidation.formSelector));
    formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    setEventListeners(formElement, allValidation);
    });
};

enableValidation(allValidation);