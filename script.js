/**
 * - Hacer el evento submit al formulario para que capture los datos
 * - Mostrar la informacion almacenada en el local storage por medio de un innerHTML y se refleje en la seccion de agendar
 */

const form = document.querySelector('form');
let listarCita = document.getElementById('listarCita');
let buttonSearch = document.getElementById('btnBuscar');
let busqueda = document.getElementById('busqueda');
const appointments = [];

const getData = () => {
    const name = document.querySelector('#nombre').value;
    const date = document.querySelector('#fecha').value;
    const hour = document.querySelector('#hora').value;
    const symptom = document.querySelector('#sintomas').value;

    let registration = {name, date, hour, symptom};
    appointments.unshift(registration);
    localStorage.setItem("citas", JSON.stringify(appointments));
    // "[{name, date}, {}]"
    //getLocalStorage();
}

form.addEventListener('submit', e => {
    e.preventDefault();
    getData();
    const citas = JSON.parse(localStorage.getItem("citas")); // [{},{}]
    citas.forEach(cita => {
        listarCita.innerHTML = `
            <tr>
                <td>${cita.name}</td>
                <td>${cita.date}</td>
                <td>${cita.hour}</td>
                <td>${cita.symptom}</td>
                <td>pending...</td>
            </tr>
        `
    });
})
