const editButton = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close-button");
const profileTextTitle = document.querySelector(".profile__texts-title");
const profileTextSubitle = document.querySelector(".profile__texts-subtitle");
const popupInputName = document.querySelector("#name");
const popupInputAbout = document.querySelector("#about");
const formElement = document.querySelector(".popup__field");

editButton.addEventListener("click", function () {
  popup.classList.add("popup_display_flex");
  popupInputName.value = profileTextTitle.textContent;
  popupInputAbout.value = profileTextSubitle.textContent;
});

popupCloseButton.addEventListener("click", function () {
  popup.classList.remove("popup_display_flex");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTextTitle.textContent = popupInputName.value;
  profileTextSubitle.textContent = popupInputAbout.value;
  popup.classList.remove("popup_display_flex");
}

formElement.addEventListener("submit", handleProfileFormSubmit);
