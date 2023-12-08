
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
    usernameHelper.innerText = 'Seu username deve ter 3 ou mais caracteres';
    estilizarInputIncorreto(usernameInput, usernameHelper);
    inputsCorretos.username = false;
  } else {
    //Estilos dinamicos caso o valor seja válido
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputsCorretos.username = true;
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
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true;
  } else {
    //Estilos dinamicos caso o valor não seja válido
    emailHelper.innerText = 'Email inválido';
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false;
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

  if (valor_idade < 18) {
    //Estilos dinamicos caso o valor não seja válido
    idadeHelper.innerText = 'Menor de idade é inválido'
    estilizarInputIncorreto(idadeInput, idadeHelper);
    inputsCorretos.idade = false;

  } else {
    //Estilos dinamicos caso o valor seja válido
    estilizarInputCorreto(idadeInput, idadeHelper);
    inputsCorretos.idade = true;
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

  if ((valor_senha.length < 4) || (valor_senha.length > 8)) {
    //Estilos dinamicos caso o valor não seja válido
    senhaHelper.innerText = 'Senha deve ter entre 4 a 8 caracteres';
    estilizarInputIncorreto(senhaInput, senhaHelper);
    inputsCorretos.senha = false;


  } else {
    //Estilos dinamicos caso o valor seja válido
    estilizarInputCorreto(senhaInput, senhaHelper);
    inputsCorretos.senha = true;
  }

  if ((senhaInput.value != confirmasenhaInput.value) && (confirmasenhaInput.value != '')) {
    estilizarInputIncorreto(confirmasenhaInput, confirmasenhaHelper);
    confirmasenhaHelper.innerText = 'Confirmação é diferente da senha';
    inputsCorretos.confirmaSenha = false;
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
    confirmasenhaHelper.innerText = 'Confirmação é diferente da senha';
    estilizarInputIncorreto(confirmasenhaInput, confirmasenhaHelper);
    inputsCorretos.confirmaSenha = false;
    confirmasenhaInput.value = '';

  } else {
    //Estilos dinamicos caso o valor seja válido
    estilizarInputCorreto(confirmasenhaInput, confirmasenhaHelper);
    inputsCorretos.confirmaSenha = true;
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


// ---------- VALIDAÇÃO ENVIO DO FORMULÁRIO ---------- //
let btnSubmit = document.querySelector('button[type="submit"]');
let inputsCorretos = {
  username: false,
  email: false,
  idade: false,
  senha: false,
  confirmaSenha: false
}

// Validar valor do submit
btnSubmit.addEventListener("click", function (evento) {
  if (inputsCorretos.username == false || inputsCorretos.email == false || inputsCorretos.idade == false || inputsCorretos.senha == false || inputsCorretos.confirmaSenha == false) {
    //evento.preventDefault();
    //alert("Os Campos Obrigatórios precisam ser preenchidos corretamente!");
  } else {
    alert("Formulário Enviado com Sucesso!");
  }
})

// ---------- CHAMAR FUNÇÃO DE VALIÇÕES DOS CAMPOS ---------- //
mostrarPopUp(usernameInput, usernameLabel);

mostrarPopUp(emailInput, emailLabel);

mostrarPopUp(idadeInput, idadeLabel);

mostrarPopUp(senhaInput, senhaLabel);

mostrarPopUp(confirmasenhaInput, confirmasenhaLabel);




function estilizarInputIncorreto(input, helper) {
  helper.classList.add('visible');
  input.classList.add('error');
  input.classList.remove('correct');

}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove('visible');
  input.classList.remove('error');
  input.classList.add('correct');

}
