const yargs = require('yargs');
// 1301 lombard street
const {geocodeAddress} = require('./geocode/geocode');
const {getWeather} = require('./weather/weather');

const argv = yargs
    .options({
    a: {
        demand: true,
        alias: 'address',
        desribe: 'Adress to fetch weather for',
        string: true
    }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage){
        console.log(errorMessage);
    }else{
        console.log(results.address);
        getWeather(results.latitude, results.longtutude, (errorMessage, weatherResults) => {
            if (errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`It's currently ${weatherResults.temperature}. It's feels like ${weatherResults.apparentTemperature}.`);
            }
        });

    }
});

