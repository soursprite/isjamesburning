const axios = require('axios')
const http = require('http')
const url = require('url')
const fs = require('fs')
const express = require ('express')
const app = express()
const cors = require('cors')
const PORT = 8000;
const ejs = require ('ejs')

let currentStatus

//national weather service requires 2 API requests
const weatherGet = () => {
    return (
        axios.get('https://api.weather.gov/points/40.1047,-88.2243', {headers: {'User-Agent': 'isJamesBurning.netlify.app/contact:jemsgold21@gmail.com'}}) //first API req
        .then(response => {
            //console.log(JSON.stringify(response.data));
            const dataJSON = response.data

            //second API call
            return axios.get(dataJSON.properties.forecastHourly, {headers: {'User-Agent': 'isJamesBurning.netlify.app/contact:jemsgold21@gmail.com'}}) //2nd API req using forecastHourly API url
        })
        .then(response2 => {
            const dataPoints = response2.data.properties.periods[0]
            console.log(dataPoints)
            /* for (const prop in dataPoints) {
                console.log(prop,dataPoints[prop])
            } */

            const status = (temp) => {
                return (`James is ${
                    (temp > 120) ? "ashes" :
                    (temp > 100) ? "fire incarnate" :
                    (temp > 89) ? "burning" :
                    (temp > 84) ? "melting" :
                    (temp > 78) ? "sweating" :
                    (temp > 72) ? "warm" :
                    (temp > 69) ? "vibin'" :
                    (temp === 69) ? "nice" :
                    (temp > 64) ? "chillin'" :
                    (temp > 58) ? "cool" :
                    (temp > 45) ? "cold" :
                    (temp > 38) ? "shivering" :
                    (temp > 20) ? "freezing" :
                    (temp > 5) ? "frozen" :
                    (temp > -10) ? "Mr. Freeze" : "superconducting"
                }`)
            }    



            currentStatus = status(dataPoints.temperature);
            return currentStatus
            
        })
        .catch(error => {
            console.error(error + " SHIT");
        }) 

    )

}

const myPromise = new Promise((resolve,reject) => {
    weatherGet()
    resolve(currentStatus)

})


app.set('view engine', 'ejs');


app.get('/', (request, res) => {
    weatherGet().then(()=>
    res.render(__dirname + '/index', {
        currentStatus: currentStatus
    })
    )
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${(process.env.PORT) ? process.env.PORT : PORT}`)
})