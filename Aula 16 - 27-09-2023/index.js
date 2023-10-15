//Permissão de usuário

//constantes
const id = "12345"
const emailDigitado = "testeexemplo.com"
const permissao = true

//variáveis
let username = "Danillo"
let password = 123



//Primeira Estrutura
if(id === "12345" && username === "Danillo"){
  console.log("Por Favor, insira sua nova senha")
} else{
  console.log("Username / senha incorretos")
}

//Segunda Estrutura
if(permissao == false){
  console.log("Você não pode acessar esta parte do sistema")
} else {
  console.log("Bem-vindo(a) á área de adminsitrador")
}
