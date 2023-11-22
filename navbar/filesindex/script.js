//alert("Hola este es mi Javascript");
/*let nombre1 = 'Marta';
nombre1 = 'Maria';

const nombre2 = 'Marta';
//nombre2 = 'Maria';

var nombre3 = 'Marta';
nombre3 = 'Maria';

console.log(nombre1);
console.log(nombre2);
console.log(nombre3);
*/

let contenidoTitulo = "Historia Mia";
let permiso = true;
console.log("permiso esta en: "+ permiso);
function cambiartitulo() {
  if (permiso == true){
    document.getElementById("tituloAcercade").innerText = contenidoTitulo;
  } else {
    console.log('no se permite cambiar');
  }

}


let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};