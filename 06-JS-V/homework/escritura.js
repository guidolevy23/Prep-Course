function Persona (nombre , apellido , direccion ){
    this.nombre = nombre,
    this.apellido = apellido,
    this.direccion = direccion,
    saludar = function(nombre){
        console.log('Hola ' + nombre);
    }
}

var guido = new Persona( 'Guido' , 'Levy' , 'Juncal 1919', saludar(guido))

//creo un contructor que recibe todo y lo mete en un nuevo objeto


function Persona (edad){
    return this.edad = edad
}

Persona.prototype.getEdad = function (){ //creo una regla de prototipo que se llame getEdad
    return this.edad
}

var guido = new Persona (22)