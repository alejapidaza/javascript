const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
let alumnosPorDia = [];
let total = 0;

// map - cantidad de alumnos por día
dias.map((dia, i) => {
let alumnos = parseInt(prompt(`¿Cuántos alumnos vinieron el ${dia}?`));
alumnosPorDia.push(alumnos);
  total += alumnos;  // Suma los alumnos de cada día
});

// Math.max y spread operator - encontrar el día con más alumnos
let maxAlumnos = Math.max(...alumnosPorDia);
let diaConMasAlumnos = dias[alumnosPorDia.indexOf(maxAlumnos)];

// filter - días con más de 10 alumnos
let diasConMuchosAlumnos = dias.filter((dia, i) => alumnosPorDia[i] > 10);

// reduce - calcular la media de alumnos por día
let mediaAlumnos = alumnosPorDia.reduce((acc, current) => acc + current, 0) / alumnosPorDia.length;

// Alertas y resultados 
alert(`El total de alumnos que vinieron durante la semana es: ${total}`);

alert(`El día con más alumnos fue el ${diaConMasAlumnos} con ${maxAlumnos} alumnos.`);

alert(`Los días con más de 10 alumnos fueron: ${diasConMuchosAlumnos.join(", ")}`);

alert(`La media de alumnos por día es: ${mediaAlumnos.toFixed(2)}`);

const resultadosDiv = document.createElement("div");
resultadosDiv.className = "resultados"; // Clase resultados
document.body.appendChild(resultadosDiv);

// template literals y join - contenido del div
resultadosDiv.innerHTML = [
`El total de alumnos que vinieron durante la semana es: ${total}`,
`El día con más alumnos fue el ${diaConMasAlumnos} con ${maxAlumnos} alumnos.`,
`Los días con más de 10 alumnos fueron: ${diasConMuchosAlumnos.join(", ")}`,
`La media de alumnos por día es: ${mediaAlumnos.toFixed(2)}`
].join("</p><p>");

// forEach - resultados en la consola
alumnosPorDia.forEach((alumnos, i) => {
console.log(`El día ${dias[i]} tuvo ${alumnos} alumnos.`);
});