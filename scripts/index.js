const editButton = document.querySelector(".profile__button-edit");
const addButton = document.querySelector("#add-button");
const editPopup = document.querySelector("#edit-person-popup");
const addPopup = document.querySelector("#add-image-popup");
const editPopupCloseButton = document.querySelector("#edit-close-button");
const addPopupCloseButton = document.querySelector("#add-close-button");
const profileTextTitle = document.querySelector(".profile__texts-title");
const profileTextSubitle = document.querySelector(".profile__texts-subtitle");
const popupInputName = document.querySelector("#name");
const popupInputAbout = document.querySelector("#about");
const popupInputLocal = document.querySelector("#local");
const popupInputLink = document.querySelector("#link");
const formElement = document.querySelector(".popup__field");
const cardTemplate = document.querySelector("template").content;
const addPlaceForm = document.querySelector("#add-popup");
const cardsContainer = document.querySelector(".elements");
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];
function createCard(card) {
  //essa função cria um novo cartão de local, com titulo e foto
  const newCardTemplate = cardTemplate
    .querySelector(".elements__card")
    .cloneNode(true);

  const cardTitle = newCardTemplate.querySelector(".elements__card-title");
  cardTitle.textContent = card.name;

  const cardImage = newCardTemplate.querySelector(".elements__card-item");
  cardImage.src = card.link;
  cardImage.alt = card.name;

  return newCardTemplate;
}

function renderCard(card) {
  cardsContainer.prepend(card);
}

for (let i = initialCards.length - 1; i >= 0; i--) {
  const cardElement = createCard(initialCards[i]);
  renderCard(cardElement);
}

editButton.addEventListener("click", function () {
  editPopup.classList.add("popup_display_flex");
  popupInputName.value = profileTextTitle.textContent;
  popupInputAbout.value = profileTextSubitle.textContent;
});

editPopupCloseButton.addEventListener("click", function () {
  editPopup.classList.remove("popup_display_flex");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTextTitle.textContent = popupInputName.value;
  profileTextSubitle.textContent = popupInputAbout.value;
  editPopup.classList.remove("popup_display_flex");
}

function handleAddPlaceFormSubmit(evt) {
  evt.preventDefault(); //o prevent.Default() é utilizado para a pagina nao atualizar quando enviar o formulario
  const name = popupInputLocal.value;
  const link = popupInputLink.value;

  const newCard = { name, link };

  const cardElement = createCard(newCard);

  renderCard(cardElement);

  addPopup.classList.remove("popup_display_flex");

  popupInputLocal.value = "";
  popupInputLink.value = "";
}

formElement.addEventListener("submit", handleProfileFormSubmit);

addPlaceForm.addEventListener("submit", handleAddPlaceFormSubmit);

addButton.addEventListener("click", function () {
  addPopup.classList.add("popup_display_flex");
});

addPopupCloseButton.addEventListener("click", function () {
  addPopup.classList.remove("popup_display_flex");
});
