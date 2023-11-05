const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const Postagens = document.getElementById("postagens");
const meusContatos = document.getElementById("meus-contatos");
const linkPerfilDados = document.getElementById("link-perfil-dados");
const Logout = document.getElementById("logout");


navPerfil.style.display = "none";

linkPerfil.addEventListener("mouseover", () => {
  navPerfil.style.display = "block";
});

document.addEventListener("keyup", (e) => {
  //console.log(e.key)
  //console.log(e.code)

  if ((e.code == 'Digit1' || e.code == 'Numpad1') && navPerfil.style.display == "none") {
    navPerfil.style.display = "block";
  } else if ((e.code == 'Digit1' || e.code == 'Numpad1') && navPerfil.style.display == "block") {
    linkPerfilDados.click();
  }

  if ((e.code == 'Digit2' || e.code == 'Numpad2') && navPerfil.style.display == "none") {
    Postagens.click();
  } else if ((e.code == 'Digit2' || e.code == 'Numpad2') && navPerfil.style.display == "block") {
    Logout.click();
  }


  if ((e.code == 'Digit3' || e.code == 'Numpad3') && navPerfil.style.display == "none") {
    meusContatos.click();
  } else if ((e.code == 'Digit3' || e.code == 'Numpad3') && navPerfil.style.display == "block") {

  }


  if (e.code == 'Escape') {
    navPerfil.style.display = "none";
  }


});