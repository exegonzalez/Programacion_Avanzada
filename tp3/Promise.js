let empleados = [{
    id: 1,
    nombre: 'Tito',
    salario: 1,
}, {
    id: 2,
    nombre: 'Pedro',
    salario: 1,
}, {
    id: 3,
    nombre: 'Juan',
    salario: 2,
}];

let salarios = [{
    id: 1,
    salarios: 3000,
}, {
    id: 2,
    salarios: 4000,
}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id == id)
        if (!empleadoDB) {
            reject(`No existe el empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB)
        }
    })
}

//1- Pruebe el siguiente código en Node.

getEmpleado(2).then(empleado => {
    console.log("El empleado de BD ", empleado);
    getSalario(empleado.salario).then(salario => {
        console.log("El salario de BD ", salario);
    }, (error) => {
        console.log(error);
    });

}, (error) => {
    console.log(error)

});

//2- Genere una nueva Promise para obtener un getSalario() del empleado

let getSalario = (id) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id == id)
        if (!salarioDB) {
            reject(`No existe el salario con el ID ${id}`)
        } else {
            resolve(salarioDB)
        }
    })
}

/*getSalario(3).then(salario => {
    console.log("El salario de BD ", salario);

}, (error) => {
    console.log(error);

});*/