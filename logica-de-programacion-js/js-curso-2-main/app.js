// Cambiar el contenido de la etiqueta h1
document.querySelector("h1").textContent = "Hora del Desafío";

// Función para el botón "Console"
function consoleClick() {
    console.log("El botón fue clicado");
}

// Función para el botón "Alert"
function alertClick() {
    alert("Yo amo JS");
}

// Función para el botón "Prompt"
function promptClick() {
    const ciudad = prompt("Ingresa el nombre de una ciudad de Brasil:");
    if (ciudad) {
        alert(`Estuve en ${ciudad} y me acordé de ti`);
    }
}

// Función para el botón "Suma"
function sumaClick() {
    const numero1 = parseFloat(prompt("Ingresa el primer número:"));
    const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (!isNaN(numero1) && !isNaN(numero2)) {
        const resultado = numero1 + numero2;
        alert(`El resultado de la suma es: ${resultado}`);
    } else {
        alert("Por favor, ingresa números válidos.");
    }
}
