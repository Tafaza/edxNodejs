// const https = require("https")
const request=require('request')
const fs = require('fs');
const csv=require('csvtojson')

const csvUrl = "https://prod-edxapp.edx-cdn.org/assets/courseware/v1/07d100219da1a726dad5eddb090fa215/asset-v1:Microsoft+DEV283x+2T2018+type@asset+block/customer-data.csv"

csv()
.fromStream(request.get(csvUrl))
.then((obj) => {
    console.log("Content downloaded and converted")
    var json = JSON.stringify(obj, null, 2)
    fs.writeFileSync("customare-data.json", json, 'utf8')
    console.log("Json written on a file")
})




