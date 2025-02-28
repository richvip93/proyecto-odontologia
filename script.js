// Función para crear una columna de dientes
function createColumn() {
    const container = document.querySelector('.matrix-container');
    const column = document.createElement('div');
    column.classList.add('matrix-column');

    // Generar dientes aleatorios
    const teeth = '🦷'.repeat(50); // 50 dientes por columna
    column.textContent = teeth;

    // Posición horizontal aleatoria
    column.style.left = `${Math.random() * 100}vw`;

    // Duración de la animación aleatoria
    column.style.animationDuration = `${Math.random() * 5 + 5}s`;

    // Añadir la columna al contenedor
    container.appendChild(column);

    // Eliminar la columna después de que termine la animación
    column.addEventListener('animationend', () => {
        column.remove();
    });
}

// Crear múltiples columnas
function createColumns() {
    setInterval(createColumn, 300); // Añade una nueva columna cada 300ms
}

// Iniciar el efecto
createColumns();