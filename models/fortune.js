const fs = require('fs')

// data source to use
const dataUri = './data/fortune.json'

let getRandomFortune = function() {
    console.log('inside grf')
    // readfile
    let data = JSON.parse(fs.readFileSync(dataUri, 'utf8'))
    let length = data.length

    // console.log(data, length)
    // generate random index
    let low = 0
    let high = length - 1
    let randomIdx = Math.round(Math.random() * (high - low) + low)
    // console.log(randomIdx)
    return data[randomIdx]
}

let getFortune = function(id) {
    // readfile
    let data = JSON.parse(fs.readFileSync(dataUri, 'utf8'))
    let length = data.length
    
    if (id > length - 1)
        return "Not a valid id"
    return data[id]
}

module.exports = { getRandomFortune, getFortune }
