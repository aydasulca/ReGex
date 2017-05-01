/*
var name = document.getElementById('input-name');
var lastname = document.getElementById('input-lastname');
var numberDNI = document.getElementById('input-ID-number');

var letras = /([A-Z])\w+/;
var letra = /[a-zA-Z]/;
if(letra.test(name)){
      alert("Estructura de nombre no válida");
    }
*/
function contrasena() {
  var password1 = document.getElementById('password1');
  var password2 = document.getElementById('password2');

  if (password1.value != password2.value) {
    alert("hola");
  }else(
    alert("no");
  )
}
