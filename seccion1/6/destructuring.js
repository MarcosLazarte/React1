const Persona = {
    nombre: 'Aky',
    edad: 25,
    casado: false,
    hijo: {
        nombre: "Laia"

    }
}
const { nombre, edad} = Persona
const nombreHijo = Persona.hijo.nombre
console.log(nombre, edad)
console.log(nombreHijo)