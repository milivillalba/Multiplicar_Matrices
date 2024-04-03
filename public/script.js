// Función para crear los inputs de la matriz en base a las filas y columnas especificadas
function crearInputsMatrix(id, rows, cols) {
    let matrixDiv = document.getElementById(id);
    matrixDiv.innerHTML = ''; // Limpiar el div antes de crear nuevos inputs

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let input = document.createElement('input');
            input.type = 'number';
            input.setAttribute('data-row', i);
            input.setAttribute('data-col', j);
            matrixDiv.appendChild(input);
        }
        matrixDiv.appendChild(document.createElement('br')); // Salto de línea después de cada fila
    }
}

// Función para multiplicar las matrices
function multiplicarMatrices() {
    // Obtener las dimensiones de las matrices A y B
    const rowsA = parseInt(document.getElementById('rowsA').value);
    const colsA = parseInt(document.getElementById('colsA').value);
    const rowsB = parseInt(document.getElementById('rowsB').value);
    const colsB = parseInt(document.getElementById('colsB').value);

    // Verificar si las matrices pueden ser multiplicadas
    if (colsA !== rowsB) {
        alert('El número de columnas de la matriz A debe ser igual al número de filas de la matriz B para multiplicar.');
        return;
    }

    // Crear los inputs para mostrar el resultado
    crearInputsMatrix('resultado', rowsA, colsB);

    // Obtener las matrices A y B
    const matrizA = obtenerMatriz('matrixA', rowsA, colsA);
    const matrizB = obtenerMatriz('matrixB', rowsB, colsB);

    // Multiplicar las matrices
    const resultado = multiplicarMatricesInternamente(matrizA, matrizB);

    // Llenar el resultado en los inputs correspondientes
    llenarResultado(resultado);
}

// Función para obtener la matriz de los inputs de la interfaz
function obtenerMatriz(id, rows, cols) {
    let matriz = [];
    let inputs = document.getElementById(id).getElementsByTagName('input');
    let index = 0;

    for (let i = 0; i < rows; i++) {
        matriz[i] = [];
        for (let j = 0; j < cols; j++) {
            matriz[i][j] = parseInt(inputs[index].value);
            index++;
        }
    }

    return matriz;
}

// Función para multiplicar las matrices internamente
function multiplicarMatricesInternamente(matrizA, matrizB) {
    let resultado = [];

    for (let i = 0; i < matrizA.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matrizB[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrizA[0].length; k++) {
                sum += matrizA[i][k] * matrizB[k][j];
            }
            resultado[i][j] = sum;
        }
    }

    return resultado;
}

// Función para llenar el resultado en la interfaz
function llenarResultado(resultado) {
    let inputs = document.getElementById('resultado').getElementsByTagName('input');
    let index = 0;

    for (let i = 0; i < resultado.length; i++) {
        for (let j = 0; j < resultado[0].length; j++) {
            inputs[index].value = resultado[i][j];
            index++;
        }
    }
}

// Event listener que se ejecuta cuando el DOM ha sido completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Event listener para el cambio en el número de filas de la matriz A
    document.getElementById('rowsA').addEventListener('change', function() {
        const rows = parseInt(this.value);
        const cols = parseInt(document.getElementById('colsA').value);
        crearInputsMatrix('matrixA', rows, cols);
    });

    // Event listener para el cambio en el número de columnas de la matriz A
    document.getElementById('colsA').addEventListener('change', function() {
        const rows = parseInt(document.getElementById('rowsA').value);
        const cols = parseInt(this.value);
        crearInputsMatrix('matrixA', rows, cols);
    });

    // Event listener para el cambio en el número de filas de la matriz B
    document.getElementById('rowsB').addEventListener('change', function() {
        const rows = parseInt(this.value);
        const cols = parseInt(document.getElementById('colsB').value);
        crearInputsMatrix('matrixB', rows, cols);
    });

    // Event listener para el cambio en el número de columnas de la matriz B
    document.getElementById('colsB').addEventListener('change', function() {
        const rows = parseInt(document.getElementById('rowsB').value);
        const cols = parseInt(this.value);
        crearInputsMatrix('matrixB', rows, cols);
    });
});