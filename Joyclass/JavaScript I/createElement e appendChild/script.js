/*let elementoJavascript = document.createElement("li");

elementoJavascript.innerText = "Javascript";
elementoJavascript.id = "ling-js";


let listaLinguagens = document.querySelector(".lista-linguagens");

listaLinguagens.appendChild(elementoJavascript);


const postagemJavaScript = document.createElement("div");

postagemJavaScript.innerHTML =

    `<h2 class="post-titulo">JavaScript</h2>

<p class="post-texto">

  JavaScript é uma linguagem de programação

</p>`

const postagens = document.querySelector(".postagens");

postagens.appendChild(postagemJavaScript);


//console.log(elementoJavascript);

*/

let h1 = document.createElement("h1");

h1.id="titulo";


let produto = document.createElement("div");

produto.innerHTML =
`<h2>Camiseta</h2>

<p>Camiseta Gola Polo de 100% algodão</p>

<h3>R$ 189,00</h3>

<img src="assets/camiseta-polo.png" alt="">`

const body = document.querySelector("body");

body.appendChild(produto);


let h2 = document.createElement("h2");
let p = document.createElement("p");
let h3 = document.createElement("h3");
let img = document.createElement("img");

h2.innerText = "Calça Jeans";
p.innerText = "Calça Jeans tamanho 44 modelo slim";
h3.innerText = "R$ 149,00";
img.src = "assets/calça-jeans.png";

body.appendChild(h2);
body.appendChild(p);
body.appendChild(h3);
body.appendChild(img);