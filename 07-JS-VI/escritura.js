// cb callback
//funcion que se pasa como argumento
//funcion dentro de lo que se manda a una fncion 
// ej:
// function(..., funcition())


// function crearSaludo (usuario, cb){
//   return cb(usuario)     
//}

function saludar(usuario){
    return 'Hola, ' + usuario;
}

function crearSaludo(usuario , cb){
    return cb(usuario)
}
        
crearSaludo('Guido', saludar);

//ESTA OK ESTO

//ARREGLOS. for each--------------------------------------------------------------------------------
//pasa por todos los valores de un array, y ejecuta

var alumnos = ['Guido', 'Thiago', 'Mile' , 'Ale','Lucho' ];

alumnos.forEach(function (elemento, indice){
    console.log(elemento);
})


//MAPS------------------------------------------------------------------------------------

var numeros = [1,2,3,4,5,6];

var dobles = numeros.map(function(x){
    return x * 2;
})

//(para que este funcione deberia crear un prototipo, donde haga una funcion de capitalizar)
var nombres = ['guido', 'thiago', 'mile' , 'ale','lucho']

var nuevoNombres = nombres.map(function(elemento){
    return elemento.capitalize();
})

// logica muy parecida a for each

// REDUCE-------------------------------------------------------------------------------
//pasea por todos y devuelve un unico valor
//map devuelve un arreglo de la misma cantidad, for each nada y reduce un unico valor

var numeros = [1,2,3,4,5,6,7]
//quiero sumarlos

var sumaReduce = numeros.reduce(function(acumulador, elemento){
    //en acumulador se va acumulando lo que vamos haciendo y en elemento es lo que se suma al acumulador
    return acumulador + elemento;
},0) // ese 0 es el acumulador con lo que arranca(entiendo eso)

