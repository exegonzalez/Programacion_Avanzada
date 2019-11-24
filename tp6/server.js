const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const DDBB = require("./DDBBfunctions");
const pathFile = "./data.json"

const path = require('path');

const app = express();

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, './public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

let io = socketIO(server)

// inicializamos la cola de tickets, ultimo ticket y la cola de attendeds con los datos cargados en data.json

let queuetickets;
let lastticket;
let queueattended;

DDBB.jsonReader(pathFile, (err, obj) => {
    if (err) {
        console.log('Error reading file:', err)
        return
    }

    queuetickets = obj.tickets;
    lastticket = obj.lastticket;
    queueattended = obj.attendeds;
});

io.on('connection', (client) => {
    console.log(`Usuario ${client.id} conectado`);

    // enviamos la cantidad de elementos de la cola de tickets al cliente

    client.emit('stateQueue', lastticket);

    //enviamos la cola de tickets attendeds 

    client.emit('updateShiftViewer', queueattended);

    client.on('disconnect', () => {
        console.log(`Usuario ${client.id} desconectado`);
    });

    // escuchamos la peticion del cliente para cargar la cola de tickets

    client.on('loadTicket', (ticketnumber) => {

        //guardamos el ultimo ticketnumber de ticket para mantener el contador, lo añadimos a la cola de tickets y actualizamos json

        queuetickets.push(ticketnumber);        
        DDBB.addTicket(pathFile, ticketnumber);

        lastticket = ticketnumber;
        console.log(lastticket);

        DDBB.addLastTicket(pathFile, lastticket);


        console.log(`Cola tickets: ${queuetickets}`);
    })

    // escuchamos la peticion del escritorio para atender un ticket

    client.on('requestTicket', (desknumber) => {

        //eliminamos ticket de la cola y actualizamos json

        let ticketnumber = queuetickets.shift()
        DDBB.removeTicket(pathFile);

        //enviamos el ticketnumber de ticket al escritorio para atenderlo

        client.emit('sendTicket', ticketnumber)

        if (ticketnumber != null) {
            let turn = {
                ticketnumber,
                desknumber
            }

            // añadimos ticket a la cola y actualizamos el json

            queueattended.push(turn);
            DDBB.addAtended(pathFile, turn);


            // enviamos mensaje para actualizar la pantalla de turns
            io.sockets.emit('showNewTurn', turn)

        }

    })

})

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});