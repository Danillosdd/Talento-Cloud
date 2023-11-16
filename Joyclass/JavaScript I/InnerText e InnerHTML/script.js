let h1  = document.querySelector("h1");
let a  = document.querySelector("a");
let ul  = document.querySelector("ul");
let ol  = document.querySelector("ol");


h1.innerText = "Inserção no h1";
a.innerText = "Proz Educação";
ul.innerHTML = `
<li>Item 1 - Lista não ordenada</li>
<li>Item 2 - Lista não ordenada</li>
<li>Item 3 - Lista não ordenada</li>
`;
ol.innerHTML = `
<a href="https://www.google.com.br" target = "_blank"><li>Google - Item 1 - Lista ordenada</li></a>
<a href="https://www.facebook.com" target = "_blank"><li>Facebook - Item 2 - Lista ordenada</li></a>
<a href="https://www.instagram.com" target = "_blank"><li>Instagram - Item 3 - Lista ordenada</li></a>
`;



