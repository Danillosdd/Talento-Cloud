//##################### FUNCIONAMENTO DO INPUT DOS BOTÕES ###################

// ----------- VARIÁVEIS / DADOS ---------------- //

let btnAdicionarProduto01 = document.querySelector("#btn-adicionar-produto-01");

let btnSubtrairProduto01 = document.querySelector("#btn-subtrair-produto-01");

let quantidadeProduto01 = document.querySelector("#quantidade-produto-01");

// ----------------- FUNÇÕES ---------------------- //

function adicionarUm() {
  //Maniputar o Input (Adicionar 1)
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;

  //Maniputar quantidade no subtotalInfo
  subtotalInfo.quantidade = Number(quantidadeProduto01.value);

  //Maniputar valor no subtotalInfo
  subtotalInfo.valor = subtotalInfo.valorInicial * subtotalInfo.quantidade;

  //Atualizar DOM
  atualizarSubtotal();
}

function RemoverUm() {
  if (quantidadeProduto01.value > 0) {
    //Maniputar o Input (Subtrair 1)
    quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;

    //Maniputar quantidade no subtotalInfo
    subtotalInfo.quantidade = Number(quantidadeProduto01.value);

    //Maniputar valor no subtotalInfo
    subtotalInfo.valor = subtotalInfo.valorInicial * subtotalInfo.quantidade;

    //Atualizar DOM
    atualizarSubtotal();
  }
}

function focusoutInputQuantidade() {
  //Maniputar o Input
  quantidadeProduto01.value = Number(quantidadeProduto01.value);

  //Maniputar quantidade no subtotalInfo
  subtotalInfo.quantidade = Number(quantidadeProduto01.value);

  //Maniputar valor no subtotalInfo
  subtotalInfo.valor = 11.66 * subtotalInfo.quantidade;

  //Atualizar DOM
  atualizarSubtotal();
}
//console.log(typeof quantidadeProduto01.value);

// ----------------- EVENTOS ---------------------- //

btnAdicionarProduto01.addEventListener("click", adicionarUm);

btnSubtrairProduto01.addEventListener("click", RemoverUm);

quantidadeProduto01.addEventListener("focusout", focusoutInputQuantidade);

//##################### FUNCIONAMENTO DO SUBTOTAL ###################

// ----------- VARIÁVEIS / DADOS ---------------- //
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valorInicial: 11.66,
  valor: 11.66,
};

// ----------------- FUNÇÕES ---------------------- //
function atualizarSubtotal() {
  if (subtotalInfo.quantidade > 1) {
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
    valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
  } else {
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " item";
    valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
  }
}

// ----------------- EVENTOS ---------------------- //

atualizarSubtotal();
