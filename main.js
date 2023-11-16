// Pom -----------------------------------------------------------
function tocaSomPom ()  {
     document.querySelector('#som_tecla_pom').play();
}

const listaDeTecla = document.querySelectorAll('tecla');

let contador = 0;

//enquanto 
while (contador <9) {
  listaDeTecla[0].onclick =tocaSomPom;
}