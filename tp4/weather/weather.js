const axios = require('axios')

let getWeatherData = async(lat, lon) => {

    let apikey = 'cb48e3f55749701e6c3d3d7adb739bb2'
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${String(lat)}&lon=${String(lon)}&appid=${apikey}`)

    let temperature = resp.data.main.temp
    let pressure = resp.data.main.pressure
    let humidity = resp.data.main.humidity
    
    return { temperature, pressure, humidity }

}

module.exports = { getWeatherData }