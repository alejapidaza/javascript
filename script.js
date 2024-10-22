const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const alumnosPorDia = [];
let total = 0;

// Recolección de datos de los alumnos
function recolectarDatos() {
    console.log("La función recolectarDatos se está ejecutando");
    dias.forEach((dia) => {
        let alumnos = prompt(`¿Cuántos alumnos vinieron el ${dia}?`);
        alumnos = (alumnos !== null && !isNaN(alumnos)) ? parseInt(alumnos) : 0;
        alumnosPorDia.push(alumnos);
        total += alumnos;  // Suma los alumnos de cada día
        console.log(`Se agregaron ${alumnos} alumnos para el día ${dia}`);
    });
    console.log("Se recolectaron los datos correctamente");
    mostrarResultados();
}

// Mostrar resultados
function mostrarResultados() {
    const maxAlumnos = Math.max(...alumnosPorDia);
    const diaConMasAlumnos = dias[alumnosPorDia.indexOf(maxAlumnos)];
    const diasConMuchosAlumnos = dias.filter((dia, i) => alumnosPorDia[i] > 10 && !isNaN(alumnosPorDia[i]));
    const mediaAlumnos = total / dias.length;

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