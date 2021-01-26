const initialCards = [
    {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const elementTemplate = document.querySelector('.item_template').content;
const elements = document.querySelector('.elements');
const openAddFormButton = document.querySelector('.profile__add-button');
const addFormNameInput = document.querySelector('[name="add-form-name-input"]');
const addFormImgInput = document.querySelector('[name="add-form-img-input"]');
const addForm = document.querySelector('.add-form');
const closeAddFormButton = document.querySelector('.add-form__container-close-button');
const submitAddFormButton = document.querySelector('.add-form__container');
const editButton = document.querySelector('.profile__edit-button');
const nameText = document.querySelector('.profile__name-text');
const jobText = document.querySelector('.profile__description');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__container-close-button');
const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('[name="name-input"]');
const jobInput = document.querySelector('[name="job-input"]');
const imgPopup = document.querySelector('.image-popup');
const imgPopupImg = document.querySelector('.image-popup__image');
const imgPopupText = document.querySelector('.image-popup__text');
const closeImgPopup = document.querySelector('.image-popup__container-close-button');

function render() {
    initialCards.forEach((element) => {
        const templateBox = elementTemplate.cloneNode(true);
        templateBox.querySelector('.elements__photo').src = element.link;
        templateBox.querySelector('.elements__photo').alt = element.name;
        templateBox.querySelector('.elements__text').textContent = element.name;
        elements.append(templateBox); 
});
}

function del() {
    let deleteButton = document.querySelectorAll('.elements__delete-button');
    deleteButton.forEach((deleteButton) => {
        deleteButton.addEventListener('click', function handleDelete(evt) {
        evt.target.closest('.elements__box').remove();
})});
}

function like() {
    let likeButton = document.querySelectorAll('.elements__button');
    likeButton.forEach((likeButton) => {
        likeButton.addEventListener('click', function likeActive(evt) {
            evt.target.classList.remove('elements__button');   
            evt.target.classList.add('elements__button-active');
            dontLike();
})});
}

function dontLike() {
    let delLikeButton = document.querySelectorAll('.elements__button-active');
    delLikeButton.forEach((delLikeButton) => {
        delLikeButton.addEventListener('click', function delLikeActive(evt) {
            evt.target.classList.remove('elements__button-active');   
            evt.target.classList.add('elements__button');
            like();
})});
}

function openAddForm() {
    addForm.classList.add('add-form_opened');
}

function closeAddForm() {
    addForm.classList.remove('add-form_opened');
}

function renderItem() {
    const htmlElement = elementTemplate.cloneNode(true);
    htmlElement.querySelector('.elements__photo').src = addFormImgInput.value;
    htmlElement.querySelector('.elements__photo').alt = addFormNameInput.value;
    htmlElement.querySelector('.elements__text').innerText = addFormNameInput.value;
    elements.prepend(htmlElement);
    closeAddForm();
}

function handleSubmit(evt) {
    evt.preventDefault();
    renderItem();
    del();
    like();
    PopImage();
}

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = nameText.textContent;
    jobInput.value = jobText.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameText.textContent = nameInput.value;
    jobText.textContent = jobInput.value;
    closePopup();
}

function popImage() {
    let popImg = document.querySelectorAll('.elements__photo');
    popImg.forEach((popImg) => {
        popImg.addEventListener('click', function openPopImg(evt) {
            imgPopup.classList.add('image-popup_opened');
            imgPopupImg.src = this.src;
            imgPopupImg.alt = this.alt;
            imgPopupText.textContent = this.alt;
        });
        closeImgPopup.addEventListener('click', function closeImagePopup() {
            imgPopup.classList.remove('image-popup_opened');
        });
})}

render();
del();
like();
popImage();

openAddFormButton.addEventListener('click', openAddForm);
closeAddFormButton.addEventListener('click', closeAddForm);
submitAddFormButton.addEventListener('submit', handleSubmit);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);


