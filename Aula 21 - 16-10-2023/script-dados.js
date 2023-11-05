const paginaInicial = document.getElementById("pagina-inicial");

document.addEventListener("keyup", (e) => {
  //console.log(e.key)
  //console.log(e.code)


  if (e.code == 'Escape') {
    paginaInicial.click();
  }


});