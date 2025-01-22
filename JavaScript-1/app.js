// variables
let numeroMaximo = 0;
let numeroSecreto = 0;
let numeroUsuario = 0;
let intentos = 1;
const maximosIntentos = 3;

// Solicitar el número máximo una vez y validar
do {
    numeroMaximo = parseInt(prompt(`Juguemos a adivinar el número secreto. Ingresa el número máximo:`));
    if (isNaN(numeroMaximo) || numeroMaximo <= 1) {
        alert("Por favor, ingresa un número mayor a 1.");
    }
} while (isNaN(numeroMaximo) || numeroMaximo <= 1);

// Generar el número secreto dentro del rango
numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;

// Bucle para adivinar el número
while (numeroUsuario !== numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Intenta adivinar el número secreto. Ingresa un número entre 1 y ${numeroMaximo}:`));

    // Validar que el número ingresado sea válido
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > numeroMaximo) {
        alert(`Por favor, ingresa un número válido entre 1 y ${numeroMaximo}.`);
        continue;
    }

    if (numeroUsuario === numeroSecreto) {
        alert(`¡Acertaste! El número secreto es ${numeroUsuario}. Lo lograste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}.`);
        break;
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor.");
        } else {
            alert("El número secreto es mayor.");
        }

        intentos++;

        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos. El número secreto era ${numeroSecreto}.`);
            break;
        }
    }
}


/*
expresion: Math.floor(Math.random() * numeroMaximo) + 1;

Math.random(): Genera un número decimal aleatorio entre 0 (incluido) y 1 (excluido), es decir, un valor como 0.123, 0.876, etc.

Math.random() * 10: Multiplica el número aleatorio generado por 10, resultando en un número decimal entre 0 y 9.999....
    Ejemplo: Si Math.random() genera 0.5, entonces el resultado será 0.5 * 10 = 5.0.

Math.floor(): Redondea el número decimal hacia abajo al entero más cercano.
    Ejemplo: Si el resultado de Math.random() * 10 es 5.8, Math.floor(5.8) lo convierte en 5.

+ 1: Suma 1 al número redondeado, desplazando el rango generado de [0, 9] a [1, 10].
    Esto asegura que el número final esté en el rango de 1 a 10 (incluidos ambos extremos).

*/