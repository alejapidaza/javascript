const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
let alumnosPorDia = [];
let total = 0;

// Recolección de datos de los alumnos
function recolectarDatos() {
    console.log("La función recolectarDatos se está ejecutando");
    dias.forEach((dia, i) => {
        let alumnos = parseInt(prompt(`¿Cuántos alumnos vinieron el ${dia}?`)) || 0; // Valor por defecto a 0 si no se ingresa nada
        alumnosPorDia.push(alumnos);
        total += alumnos;  // Suma los alumnos de cada día
        console.log(`Se agregaron ${alumnos} alumnos para el día ${dia}`);
    });
    console.log("Se recolectaron los datos correctamente");
    mostrarResultados();
}

// Mostrar resultados
function mostrarResultados() {
    let maxAlumnos = Math.max(...alumnosPorDia);
    let diaConMasAlumnos = dias[alumnosPorDia.indexOf(maxAlumnos)];
    let diasConMuchosAlumnos = dias.filter((dia, i) => alumnosPorDia[i] > 10);
    let mediaAlumnos = alumnosPorDia.reduce((acc, current) => acc + current, 0) / alumnosPorDia.length;

    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
        <p>El total de alumnos que vinieron durante la semana es: ${total}</p>
        <p>El día con más alumnos fue el ${diaConMasAlumnos} con ${maxAlumnos} alumnos.</p>
        <p>Los días con más de 10 alumnos fueron: ${diasConMuchosAlumnos.join(", ")}</p>
        <p>La media de alumnos por día es: ${mediaAlumnos.toFixed(2)}</p>
    `;

    alumnosPorDia.forEach((alumnos, i) => {
        console.log(`El día ${dias[i]} tuvo ${alumnos} alumnos.`);
    });
}

// Evento para iniciar la recolección de datos
document.addEventListener("DOMContentLoaded", function() {
    const iniciarButton = document.getElementById("iniciar");
    iniciarButton.addEventListener("click", recolectarDatos);
});