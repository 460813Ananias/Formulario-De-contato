
const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password");
const passwordconfirmation  = document.getElementById("password-confirmation");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("CADASTRADO COM SUCESSO!!")
})