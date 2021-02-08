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
const imageInput = document.querySelector('.popup__container-image');
const descriptionInput = document.querySelector('.popup__container-text');
const popupMax = document.querySelector('.popup_type_show-image');
const popupProfileForm = document.querySelector('.popup_type_edit-form');
const popupAddForm = document.querySelector('.popup_type_add-card');
const buttonCloseEditForm = document.querySelector('[name="close-edit-form"]');
const buttonCloseImageForm = document.querySelector('[name="close-image"]');
const buttonCloseAddForm = document.querySelector('[name="close-add-card"]');
const popupList = Array.from(document.querySelectorAll('.popup'));

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', useEscape);
}

function useEscape (evt) {
    const popupOpen = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopup(popupOpen);
    }
}

function useClick (popup) {
    popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(popup);
    }
    })
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', useEscape);
}

popupList.forEach((item) => {
    useClick(item);
});

function openProfileForm() {
    nameInput.value = nameText.textContent;
    jobInput.value = jobText.textContent;
    openPopup(popupProfileForm);
}

function renderProfile (evt) {
    evt.preventDefault();
    nameText.textContent = nameInput.value;
    jobText.textContent = jobInput.value;
    closePopup(popupProfileForm);
}

function getCard(data) {
    const templateBox = elementTemplate.cloneNode(true);
    templateBox.querySelector('.elements__photo').src = data.link;
    templateBox.querySelector('.elements__photo').alt = data.name;
    templateBox.querySelector('.elements__text').innerText = data.name;
    templateBox.querySelector('.elements__delete-button').addEventListener('click', function (evt){
        deleteCard(evt);
    });
    templateBox.querySelector('.elements__button').addEventListener('click', function (evt){
        likeCard(evt);
    });
    templateBox.querySelector('.elements__photo').addEventListener('click', function (evt){
        openImage(data);
    });
    return templateBox;
} 

function renderItem(item){
    elements.prepend(getCard(item));
}

function render() {
	initialCards.reverse().forEach(renderItem);
}

function openAddForm() {
    openPopup(popupAddForm);
}

function addCard (evt) {
    evt.preventDefault();
    renderItem({
        name: addFormNameInput.value,
        link: addFormImgInput.value
    });
    closePopup(popupAddForm);
    addForm.reset();
} 

function openImage(data) {
    imageInput.src = data.link;
    imageInput.alt = data.name;
    descriptionInput.textContent = data.name;
    openPopup(popupMax);
}

function deleteCard(evt) {
    evt.target.closest('.elements__box').remove();
}

function likeCard(evt) {
    const likeButton = 'elements__button_active';
    evt.target.classList.toggle(likeButton);
}

buttonCloseEditForm.addEventListener('click', function () {
    closePopup(popupProfileForm);
});

buttonCloseImageForm.addEventListener('click', function () {
    closePopup(popupMax);
});

buttonCloseAddForm.addEventListener('click', function () {
    closePopup(popupAddForm);
});

addFormButton.addEventListener('click', openAddForm);
addForm.addEventListener('submit', addCard);
profileFormButton.addEventListener('click', openProfileForm);
profileForm.addEventListener('submit', renderProfile);

render();