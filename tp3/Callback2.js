//BBDD empleados
let empleados = [{
    id: 1,
    nombre: "Ernesto",
    salario: 1
}, {
    id: 2,
    nombre: "Marcelo",
    salario: 1,
}, {
    id: 3,
    nombre: "Pedro",
    salario: 2,
}];

//BBDD salarios
let salarios = [{
    id: 1,
    salario: "1000"
}, {
    id: 2,
    salario: "2000"
}];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id == id)
    if (!empleadoDB) {
        callback(`No existe un empleado con el id ${id}`)
    } else {
        callback(null, empleadoDB)
    }
}

let getSalario = (id, callback) => {
    let salarioDB = salarios.find(salario => salario.id == id)
    if (!salarioDB) {
        callback(`No existe un salario con el id ${id}`)
    } else {
        callback(null, salarioDB)
    }
}

/* getSalario(3, (err, salario) => {
    if (err) {
        return console.log(err)
    } else {
        console.log(salario)
    }
})*/

//2- En otro archivo callback2.js, creamos una función para obtener un empleado en
//base al modelo anterior con el callback.

//3- Agregue al código de nuestro programa para obtener los salarios de ese empleado

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err)
    } else {
        console.log(empleado)

        getSalario(empleado.salario, (err, salario) => {
            if (err) {
                return console.log(err)
            } else {
                console.log(salario)
            }
        })

    }
})