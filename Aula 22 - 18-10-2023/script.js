// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");

let usernameLabel = document.querySelector('label[for="username"]');

let usernameHelper = document.getElementById("username-helper");


// Validar valor do input
usernameInput.addEventListener("change", function (evento) {

  let valor_username = evento.target.value
  console.log(valor_username);

  if (valor_username.length < 3) {
    //Estilos dinamicos caso o valor não seja válido
    usernameInput.classList.remove('correct');
    usernameInput.classList.add('error');
    usernameHelper.innerText = 'Seu username deve ter 3 ou mais caracteres'
    usernameHelper.classList.add('visible')

  } else {
    //Estilos dinamicos caso o valor seja válido
    usernameInput.classList.remove('error');
    usernameHelper.classList.remove('visible');
    usernameInput.classList.add('correct');
  }

})



// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");

let emailLabel = document.querySelector('label[for="email"]');

let emailHelper = document.getElementById("email-helper");

emailInput.addEventListener("change", function (evento) {
  let valor_email = evento.target.value

  if (valor_email.includes('@') && valor_email.includes('.com')) {
    //Estilos dinamicos caso o valor seja válido
    emailInput.classList.remove('error');
    emailHelper.classList.remove('visible');
    emailInput.classList.add('correct');
  } else {
    //Estilos dinamicos caso o valor não seja válido
    emailInput.classList.remove('correct');
    emailInput.classList.add('error');
    emailHelper.innerText = 'Email inválido';
    emailHelper.classList.add('visible');
  }

})


// ---------- VALIDAÇÃO IDADE ---------- //
let idadeInput = document.getElementById("idade");

let idadeLabel = document.querySelector('label[for="idade"]');

let idadeHelper = document.getElementById("idade-helper");


// Validar valor do input
idadeInput.addEventListener("change", function (evento) {

  let valor_idade = evento.target.value
  console.log(valor_idade);

  if (valor_idade.length < 18) {
    //Estilos dinamicos caso o valor não seja válido
    idadeInput.classList.remove('correct');
    idadeInput.classList.add('error');
    idadeHelper.innerText = 'Menor de idade é inválido'
    idadeHelper.classList.add('visible')

  } else {
    //Estilos dinamicos caso o valor seja válido
    idadeInput.classList.remove('error');
    idadeHelper.classList.remove('visible');
    idadeInput.classList.add('correct');
  }

})


// ---------- VALIDAÇÃO SENHA ---------- //
let senhaInput = document.getElementById("senha");

let senhaLabel = document.querySelector('label[for="senha"]');

let senhaHelper = document.getElementById("senha-helper");


// Validar valor do input
senhaInput.addEventListener("change", function (evento) {

  let valor_senha = evento.target.value
  //console.log(valor_senha);

  if (valor_senha.length < 3) {
    //Estilos dinamicos caso o valor não seja válido
    senhaInput.classList.remove('correct');
    senhaInput.classList.add('error');
    senhaHelper.innerText = 'Senha deve ter entre 4 a 8 caracteres'
    senhaHelper.classList.add('visible')

  } else {
    //Estilos dinamicos caso o valor seja válido
    senhaInput.classList.remove('error');
    senhaHelper.classList.remove('visible');
    senhaInput.classList.add('correct');
  }

  if ((senhaInput.value != confirmasenhaInput.value) && (confirmasenhaInput.value != '')) {
    confirmasenhaInput.classList.remove('correct');
    confirmasenhaInput.classList.add('error');
    confirmasenhaHelper.innerText = 'Confirmação é diferente da senha'
    confirmasenhaHelper.classList.add('visible')
    confirmasenhaInput.value = '';
  }

})


// ---------- VALIDAÇÃO CONFIRMAÇÃO DE SENHA ---------- //
let confirmasenhaInput = document.getElementById("confirma-senha");

let confirmasenhaLabel = document.querySelector('label[for="confirma-senha"]');

let confirmasenhaHelper = document.getElementById("confirma-senha-helper");


// Validar valor do input
confirmasenhaInput.addEventListener("blur", function (evento) {

  let valor_confirma_senha = evento.target.value
  console.log(valor_confirma_senha);

  if (valor_confirma_senha != senhaInput.value) {
    //Estilos dinamicos caso o valor não seja válido
    confirmasenhaInput.classList.remove('correct');
    confirmasenhaInput.classList.add('error');
    confirmasenhaHelper.innerText = 'Confirmação é diferente da senha'
    confirmasenhaHelper.classList.add('visible')
    confirmasenhaInput.value = '';

  } else {
    //Estilos dinamicos caso o valor seja válido
    confirmasenhaInput.classList.remove('error');
    confirmasenhaHelper.classList.remove('visible');
    confirmasenhaInput.classList.add('correct');
  }

})



// ---------- MOSTRAR LABEL DE CAMPO OBRIGATÓRIO ---------- //
function mostrarPopUp(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", function () {
    label.classList.add('required-popup')
  })

  // Ocultar popup de campo obrigatório
  input.addEventListener('blur', function () {
    label.classList.remove('required-popup')
  })

}


// ---------- CHAMAR FUNÇÃO DO LABEL DE CAMPO OBRIGATÓRIO ---------- //
mostrarPopUp(usernameInput, usernameLabel);

mostrarPopUp(emailInput, emailLabel);

mostrarPopUp(idadeInput, idadeLabel);

mostrarPopUp(senhaInput, senhaLabel);

mostrarPopUp(confirmasenhaInput, confirmasenhaLabel);

