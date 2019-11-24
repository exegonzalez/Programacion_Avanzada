//- Ejercicio 1
/*var nombre = prompt("Ingrese su nombre: ")
var edad = prompt("Ingrese su edad: ")
document.write("- Ejercicio 1" + "<br/>La edad de " + nombre + " es: " + edad)*/

//- Ejercicio 2
/*var num1 = parseFloat(prompt("Ingrese el primer numero: "))
var num2 = parseFloat(prompt("Ingrese el segundo numero: "))
document.write("- Ejercicio 2" + "<br/>La suma de " + num1 + " y " + num2 + " es: " + (num1 + num2) +
    "<br/>La resta de " + num1 + " y " + num2 + " es: " + (num1 - num2) +
    "<br/>La multiplicacion de " + num1 + " y " + num2 + " es: " + (num1 * num2));
if (num2 != 0) {
    document.write("<br/>La division de " + num1 + " y " + num2 + " es: " + (num1 / num2))
} else {
    document.write("<br/>Como el segundo numero es 0, no se puede dividir")
}*/

//- Ejercicio 3
/*var edad = parseFloat(prompt("Ingrese la edad de la persona: "))
if (edad >= 60) {
    document.write("- Ejercicio 3" + "<br/>La persona puede jubilarse")
} else {
    document.write("- Ejercicio 3" + "<br/>La persona no puede jubilarse, ya que no tiene mas de 60 años")
}*/

//- Ejercicio 4
/*var sexo = prompt("Ingrese el sexo de la persona: ")
var edad = parseFloat(prompt("Ingrese la edad de la persona: "))
if (sexo == "mujer") {
    if (edad >= 60) {
        document.write("- Ejercicio 4" + "<br/>La persona puede jubilarse")
    } else {
        document.write("- Ejercicio 4" + "<br/>La persona no puede jubilarse, ya que no tiene mas de 60 años")
    }
} else if (sexo == "hombre") {
    if (edad >= 65) {
        document.write("- Ejercicio 4" + "<br/>La persona puede jubilarse")
    } else {
        document.write("- Ejercicio 4" + "<br/>La persona no puede jubilarse, ya que no tiene mas de 65 años")
    }
}*/

//- Ejercicio 5
/*var cuenta, edad
for (cuenta = 1; cuenta <= 10; cuenta++) {
    edad = prompt("Introduzca su edad (en cifras).", "")
    edad = parseInt(edad)
    if (edad < 18) {
        alert("Es usted menor de edad")
    } else {
        alert("Es usted mayor de edad")
    }
}*/

//- Ejercicio 6
/*function cambiarColor(color) {
    document.bgColor = color
}*/

//-Ejercicio 7
/*var nombres = new Array()
nombres[0] = "Nacho"
nombres[1] = "Arek"
nombres[2] = "Laura"
nombres[3] = "Sonia"
nombres[4] = "Gonzalo"
nombres[5] = "Eva"
nombres[6] = "Pedro"
nombres[7] = "Manuel"
var nomb = prompt("Ingrese el nombre a buscar en la matriz: ")
if (nombres.includes(nomb)) {
    for (i = 0; i < nombres.length; i++) {
        document.write(nombres[i] + "<br>")
    }
} else {
    alert("Nombre no existe en la lista")
}*/

//-Ejercicio 8
/*function generar_tabla() {
    var fecha = new Date()
    let myTable = "<table><tr><td style='width: 100px; color: red;'>getFullYear</td>";
    myTable += "<td style='width: 100px; color: red; text-align: right;'>getYear</td>";
    myTable += "<td style='width: 100px; color: red; text-align: right;'>getMonth</td>";
    myTable += "<td style='width: 100px; color: red; text-align: right;'>getDate</td>";
    myTable += "<td style='width: 100px; color: red; text-align: right;'>getHours</td>";
    myTable += "<td style='width: 100px; color: red; text-align: right;'>getMinutes</td>";
    myTable += "<td style='width: 100px; color: red; text-align: right;'>getSeconds</td>";
    myTable += "<td style='width: 100px; color: red; text-align: right;'>getMilliseconds</td>";
    myTable += "<td style='width: 100px; color: red; text-align: right;'>getTime</td></tr>";
    myTable += "<tr><td style='width: 100px;'>---------------</td>";
    myTable += "<td style='width: 100px; text-align: right;'>---------------</td>";
    myTable += "<td style='width: 100px; text-align: right;'>---------------</td>";
    myTable += "<td style='width: 100px; text-align: right;'>---------------</td>";
    myTable += "<td style='width: 100px; text-align: right;'>---------------</td>";
    myTable += "<td style='width: 100px; text-align: right;'>---------------</td>";
    myTable += "<td style='width: 100px; text-align: right;'>---------------</td>";
    myTable += "<td style='width: 100px; text-align: right;'>---------------</td>";
    myTable += "<td style='width: 100px; text-align: right;'>---------------</td></tr>";

    myTable += "<tr><td style='width: 100px;text-align: lefth;'>" + fecha.getFullYear() + "</td>";
    myTable += "<td style='width: 100px;text-align: lefth;'>" + "| " + fecha.getYear() + "</td>";
    myTable += "<td style='width: 100px;text-align: lefth;'>" + "| " + fecha.getMonth() + "</td>";
    myTable += "<td style='width: 100px;text-align: lefth;'>" + "| " + fecha.getDate() + "</td>";
    myTable += "<td style='width: 100px;text-align: lefth;'>" + "| " + fecha.getHours() + "</td>";
    myTable += "<td style='width: 100px;text-align: lefth;'>" + "| " + fecha.getMinutes() + "</td>";
    myTable += "<td style='width: 100px;text-align: lefth;'>" + "| " + fecha.getSeconds() + "</td>";
    myTable += "<td style='width: 100px;text-align: lefth;'>" + "| " + fecha.getMilliseconds() + "</td>";
    myTable += "<td style='width: 100px;text-align: lefth;'>" + "| " + fecha.getTime() + "</td>";
    myTable += "</tr>";

    myTable += "</table>";
    document.getElementById('tablePrint').innerHTML = myTable;
}*/


/*function añadirFecha() {
    var arrayFecha = new Array()
    var fecha = new Date()
    arrayFecha.push(new Array(fecha.getFullYear(), '| ' + fecha.getYear(), '| ' + fecha.getMonth(), '| ' + fecha.getDate(),
        '| ' + fecha.getHours(), '| ' + fecha.getMinutes(), '| ' + fecha.getSeconds(), '| ' + fecha.getMilliseconds(),
        '| ' + fecha.getTime()));
    return arrayFecha;
}

function getCells(data, type) {
    return data.map(cell => `<${type}>${cell}</${type}>`).join('');
}

function createBody(data) {
    return data.map(row => `<tr>${getCells(row, 'td')}</tr>`).join('');
}

function createTable(data) {
    let cabeceras = ['getFullYear', '| getYear', '| getMonth', '| getDate', '| getHours', '| getMinutes', '| getSeconds', '| getMilliseconds', '| fecha.getTime'];
    return `
<table>
<thead>${getCells(cabeceras, 'th')}</thead>
<tbody>${createBody(data)}</tbody>
</table>
`;
}

document.body.insertAdjacentHTML('beforeend', createTable(añadirFecha()));*/