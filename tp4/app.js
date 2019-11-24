const place = require('./place/place')
const weather = require('./weather/weather')
const fs = require('fs')
const pathfile = 'weather_app.json'


const yargs = require('yargs').options({
    direction: {
        alias: 'p',
        desc: 'Place name',
        demand: true
    }
}).argv


let getInfo = async(locname) => {

    try{
        
        let loc = await place.getGeoLocation(locname) 
        let weath = await weather.getWeatherData(loc.lat, loc.lon)
        
        let locdata = {
                        location: {
                            name: loc.name,
                            latitude: loc.lat,
                            longitude: loc.lon
                        },
                        weather: {
                            temperature: weath.temperature,
                            pressure: weath.pressure,
                            humidity: weath.humidity
                        },
                        date: new Date()
                    }     
        
        saveDataBBDD(locdata) //Save data in BBDD

        return `The temperature of ${loc.name} is ${weath.temp} C° and its latitude and longitude is ${loc.lat}, ${loc.lon}`

    } catch (err) {
        return `The weather could not be determined in ${locname}`
    }
   

}


let saveDataBBDD = (locdata) => {
    fs.exists(pathfile, (exist) => {

        if (exist) {
            fs.readFile(pathfile, (err, data) => {
                if (err) throw new Error(`Error: ${err}.`)
                
                obj = JSON.parse(data)
                obj.locations.push(locdata)
                let json = JSON.stringify(obj, null, 2)

                fs.writeFile(pathfile, json, (err) => {
                    if (err) throw new Error(`Error: ${err}.`)
                })
            })
        } else {
            obj = {
                locations: [
                    locdata
                ]
            }
            let json = JSON.stringify(obj, null, 2)

            fs.writeFile(pathfile, json, (err) => {
                if (err) throw new Error(`Error: ${err}.`)
            })
        }
    })
}


getInfo(yargs.direction)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
