const submitButton = document.querySelector("#submit-btn");
const inputEmail = document.querySelector("#email")
const mainContainer = document.querySelector(".main-container");
const succesContainer = document.querySelector(".succes-container");
const emailConfirmation = document.querySelector(".email-confirmation");
const resetPage = document.querySelector(".dismiss-message")

function changePage() {
    mainContainer.classList.toggle('active');
    succesContainer.classList.toggle('active');
}
function manageUserEmail() {
    userEmail = inputEmail.value;
    emailConfirmation.innerText = userEmail;
    inputEmail.value = "";
}

submitButton.addEventListener("click", () => {
    manageUserEmail()
    changePage()
});

resetPage.addEventListener("click", changePage)

