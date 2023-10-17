//const erroExample = document.querySelector(".error");

//console.log(erroExample);

//erroExample.style.backgroundColor= "blue";
//erroExample.style.border = "2px solid black";

////////////////////////////////////

const login = document.querySelector("h2");
login.style.color = "#2b2c85";
login.style.fontSize = "34px";
login.style.textAlign = "center";
login.style.textTransform = "uppercase";

const button = document.querySelector("button");
button.textContent = "Entrar";
button.style.fontWeight = "bold";
button.style.borderRadius = "10px";
button.style.position = "relative";
button.style.left = "200px";

const usernameInput = document.querySelector("#login-usuario");
usernameInput.classList.add("correct");

const passwordInput = document.querySelector("#login-senha");
passwordInput.classList.add("error");

const errorMensage = document.querySelectorAll(".error-text");
//errorMensage.style.display = "Block";
errorMensage[1].classList.add("visible");
