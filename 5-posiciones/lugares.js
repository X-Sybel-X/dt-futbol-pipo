/*
Salen de la oficina y de camino a los vestuarios conocen dos jugadores más.

Se presenta Nahitan Nández, mediocampista, que comenta que no tiene apodo.
Y a su lado, te estrecha la mano el mediocampista Federico Valverde, conocido como "Pajarito".

Ya es dificil llevar registro de todos los nombres nuevos.

Escriba un programa que:
- guarde en una colección
  - que acepte una fecha de nacimiento en formato string
  - y que devuelva la cantidad de años cumplidos
- imprima en consola un mensaje en el formato: {nombre} "{apodo}" {apellido} (edad).

Tip: consulten los métodos de la clase Date
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
*/


function edad(fechaNacimiento) {
    var partesFecha = fechaNacimiento.split("/"); 
    var fechaNac = new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]); 
    var fechaActual = new Date();
    var edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    if (fechaNac.getMonth() > fechaActual.getMonth() || (fechaNac.getMonth() === fechaActual.getMonth() && fechaNac.getDate() > fechaActual.getDate())) {
        edad--;
    }
    return edad;
}


var jugadores = [
    {
        nombre: "Nahitan",
        apellido: "Nández",
        apodo: null,
        fechaNacimiento: "12/02/1996"
    },
    {
        nombre: "Federico",
        apellido: "Valverde",
        apodo: "Pajarito",
        fechaNacimiento: "22/07/1998"
    }
];


jugadores.forEach(function(jugador) {
    var edadJugador = edad(jugador.fechaNacimiento);
    console.log(jugador.nombre + ' "' + (jugador.apodo || "Sin apodo") + '" ' + jugador.apellido + ' (' + edadJugador + ' años)');
});
