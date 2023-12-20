const edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18 && edad <= 71) {
  document.write("Puedes conducir");
} else if (edad < 18) {
  document.write("No puedes conducir, eres menor");
} else {
  document.write("No puedes conducir, eres mayor");
}
