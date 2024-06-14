// responsive hamburger menu
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// dom
const buttonSendMassage = document.getElementById("send-massage");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("message");

buttonSendMassage.addEventListener("click", () => {
  if (!inputEmail.includes("@gmail.com")) {
    return;
  }

  inputEmail.value = "";
  inputName.value = "";
  inputMessage.value = ""; 
});
