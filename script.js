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



const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});