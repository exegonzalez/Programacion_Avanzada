let empleados = [{
    id: 1,
    nombre: 'Tito',
}, {
    id: 2,
    nombre: 'Pedro',
}, {
    id: 3,
    nombre: 'Juan',
}];

let salarios = [{
    id: 1,
    salarios: 3000,
}, {
    id: 2,
    salarios: 4000,
}];

let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id == id)
    if (!empleadoDB) {
        throw new Error(`No existe el empleado con el ID ${id}`)
    } else {
        return empleadoDB
    }
}

getEmpleado(1)
    .then(empleado =>
        console.log(`El empleado ${empleado.id} en la BD ${empleado.nombre}`)
    )
    .catch(error => console.log(error));

/*1- Genere el manejo del async para que me devuelva un salario ingresado por id,
también deberá manejar el error, en caso de que no se encuentre el id dentro
de la base de datos local.*/

const getSalario = async(id) => {
    let salarioDB = salarios.find(salario => salario.id == id)
    if (!salarioDB) {
        throw new Error(`No existe el salario con el ID ${id}`)
    } else {
        return salarioDB
    }
}

getSalario(2)
    .then(salario =>
        console.log(`El salario ${salario.id} en la BD ${salario.salarios}`)
    )
    .catch(error => console.log(error));