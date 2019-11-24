let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: "Ernesto",
        id
    }
    if (id == 20) {
        callback(`El usuario con id ${id}, no existe en la base de datos`)
    } else {
        callback(null, usuario)
    }
}

getUsuarioById(10, (err, usuario) => {
    if (err) {
        return console.log(err)
    } else {
        console.log('Usuario de la base de datos', usuario)
    }
})

//1- Ejecute con nodemon las funciones, que sucede cuando modificamos el id?
//Cuando se modifica el id, el callback devuelve el objeto usuario con el nombre definido y el id ingresado