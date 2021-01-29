const elementTemplate = document.querySelector('.item_template').content;
const elements = document.querySelector('.elements');
const nameText = document.querySelector('.profile__name-text');
const jobText = document.querySelector('.profile__description');
const profileFormButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const profileForm = document.querySelector('[name="profile-form"]');
const nameInput = document.querySelector('[name="name-input"]');
const jobInput = document.querySelector('[name="job-input"]');
const addFormButton = document.querySelector('.profile__add-button');
const addForm = document.querySelector('[name="add-form"]');
const addFormNameInput = document.querySelector('[name="add-form-name-input"]');
const addFormImgInput = document.querySelector('[name="add-form-img-input"]');
const imageForm = document.querySelector('[name="image-form"]');
const imageInput = document.querySelector('.popup__container-image');
const descriptionInput = document.querySelector('.popup__container-text');

function openPopup() {
    popup.classList.add('popup_opened');
    renderCloseButton();
}

function closePopup() {
    popup.classList.remove('popup_opened');
    profileForm.classList.remove('popup__container_type_edit-form');
    addForm.classList.remove('popup__container_type_add-card');
    imageForm.classList.remove('popup__container_show-image');
}

function openProfileForm() {
    openPopup();
    profileForm.classList.add('popup__container_type_edit-form');
    nameInput.value = nameText.textContent;
    jobInput.value = jobText.textContent;
}

function renderProfile (evt) {
    evt.preventDefault();
    nameText.textContent = nameInput.value;
    jobText.textContent = jobInput.value;
    closePopup();
}

function openAddForm() {
    openPopup();
    addForm.classList.add('popup__container_type_add-card');
}

function renderCard() {
    const templateBox = elementTemplate.cloneNode(true);
    templateBox.querySelector('.elements__photo').src = addFormImgInput.value;
    templateBox.querySelector('.elements__photo').alt = addFormNameInput.value;
    templateBox.querySelector('.elements__text').innerText = addFormNameInput.value;
    return templateBox;
}

function addCard (evt) {
    evt.preventDefault();
    elements.prepend(renderCard());
    deleteCard();
    likeCard();
    openImage()
    closePopup();
} 

function openImageForm() {
    openPopup();
    imageForm.classList.add('popup__container_show-image');
}

function openImage() {
    const image = document.querySelectorAll('.elements__photo');
    image.forEach((image) => {
        image.addEventListener('click', function renderImageForm(evt) {
            openImageForm();
            imageInput.src = this.src;
            imageInput.alt = this.alt;
            descriptionInput.textContent = this.alt;
        });
})}

function deleteCard() {
    const deleteButton = document.querySelectorAll('.elements__delete-button');
    deleteButton.forEach((deleteButton) => {
        deleteButton.addEventListener('click', function handleDelete(evt) {
        evt.target.closest('.elements__box').remove();
})});
}

function likeCard() {
    const likeButton = document.querySelectorAll('.elements__button');
    likeButton.forEach((likeButton) => {
        likeButton.addEventListener('click', function likeActive(evt) {
            evt.target.classList.add('elements__button_active');
            dontLikeCard();
})});
}

function dontLikeCard() {
    const delLikeButton = document.querySelectorAll('.elements__button_active');
    delLikeButton.forEach((delLikeButton) => {
        delLikeButton.addEventListener('click', function delLikeActive(evt) {
            evt.target.classList.remove('elements__button_active');   
            likeCard();
})});
}

function renderCloseButton() {
    const popupCloseButton = document.querySelectorAll('.popup__container-close-button');
    popupCloseButton.forEach((popupCloseButton) => {
        popupCloseButton.addEventListener('click', closePopup);
});
}

function getCard(data) {
    const templateBox = elementTemplate.cloneNode(true);
    templateBox.querySelector('.elements__photo').src = data.link;
    templateBox.querySelector('.elements__photo').alt = data.name;
    templateBox.querySelector('.elements__text').textContent = data.name;
    elements.append(templateBox); 
    deleteCard();
    likeCard();
    openImage();
}

function render() {
	initialCards.forEach(getCard);
}

render();

addFormButton.addEventListener('click', openAddForm);
addForm.addEventListener('submit', addCard);
profileFormButton.addEventListener('click', openProfileForm);
profileForm.addEventListener('submit', renderProfile);