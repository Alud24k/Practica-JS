// Comentario de una sola linea

/* Comentario de varias lineas */

// Mostrar mensaje en la consola
console.log("Mensaje por consola");

// Mostrar un mensaje en el documento de HTML
document.write('<p class="text-center text-primary">Primer mensaje en JS</p>');

// Ventanas emergentes
// alert("Ejemplo de una alerta");

// Declarar e inicializar una variable
// Declarar o crear una variable (var - let -const)

let regalo = "iPhone 15 Pro Max";

document.write("Regalo de navidad 2023: " + regalo + "<br>");

// Modificar el contenido de una variable creada con la variable "let"
regalo = "RTX 4090 ROG STRIX";

document.write("Regalo de navidad 2023: " + regalo);

const urlUniverse = "https://universe.rollingcodeschool.com";

document.write("<br>Pagina de Universe: " + urlUniverse);

let precio = 1100;
let impuesto = 600;

document.write(
  "<br>El precio del iPhone 15 es: $" + (precio + impuesto) + " USD"
);

// parseInt('50')
// parseFloat('50.3')
let gradosCelsius = parseInt(prompt("Ingrese el valor en grados centigrados"));
let gradosFahrenheit = (gradosCelsius * 9) / 5 + 32;

document.write(
  "<br>" +
    gradosCelsius +
    "°C grados celsius son equivalentes a " +
    gradosFahrenheit +
    "°F grados farenheit"
);

document.write("<br>Otro ejemplo: " + (gradosCelsius + 32));
