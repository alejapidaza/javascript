const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
let alumnosPorDia = [];
let total = 0;

for (let i = 0; i < dias.length; i++) {
    let alumnos = parseInt(prompt(`¿Cuántos alumnos vinieron el ${dias[i]}?`));
    alumnosPorDia.push(alumnos);
    total += alumnos;  // Sumamos los alumnos de cada día
}

let maxAlumnos = Math.max(...alumnosPorDia);
let diaConMasAlumnos = dias[alumnosPorDia.indexOf(maxAlumnos)];

alert(`El total de alumnos que vinieron durante la semana es: ${total}`);

alert(`El día con más alumnos fue el ${diaConMasAlumnos} con ${maxAlumnos} alumnos.`);

const resultadosDiv = document.createElement("div");
resultadosDiv.className = "resultados"; // Clase resultados
document.body.appendChild(resultadosDiv);

resultadosDiv.innerHTML = `
    <p>El total de alumnos que vinieron durante la semana es: ${total}</p>
    <p>El día con más alumnos fue el ${diaConMasAlumnos} con ${maxAlumnos} alumnos.</p>
`;

// Para activar la animación
resultadosDiv.classList.add("show");