////////////////////////////////////////////////////////////////////////////////////

//EXEMPLOS::

//console.log("Hello World");

//const logoElement = document.getElementById("logo");
//console.log(logoElement);

//const postAuthor = document.getElementsByClassName("post-autor");
//console.log(postAuthor);

//const textSecondPost = document.querySelector("#post02 .post-texto, #post01");
//console.log(textSecondPost);

//const listSocial = document.querySelectorAll(".lista_redes a");
//console.log(listSocial);
//listSocial.forEach(function(element){
//    console.log(element.innerText);
//})

////////////////////////////////////////////////////////////////////////////////////

//Link dentro do Primeiro Post
const linkPost01 = document.querySelector("#post01 .post-texto a").innerText;
console.log(linkPost01);

//A palavra em negrito dentro do texto no segundo post
const palavraNegrito = document.querySelector(
  "#post02 .post-texto strong"
).innerText;
console.log(palavraNegrito);

//Input de nome do formulário
const inputNome = document.querySelector("#nome");
console.log(inputNome);

//Os links da lista de redes sociais final da página
const listaLinks = document.querySelectorAll(".lista_redes a");
console.log(listaLinks);
listaLinks.forEach(function (element) {
  console.log(element.innerText);
});

//Autor dos Posts
const postAutor = document.querySelectorAll(".post-autor");
console.log(postAutor);
postAutor.forEach(function (element) {
  console.log(element.innerText);
});
