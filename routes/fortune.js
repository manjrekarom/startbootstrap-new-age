const express = require('express')
const router = express.Router()
const { getRandomFortune, getFortune } = require('../models/fortune')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

// define the home page route
router.get('/', function (req, res) {
    console.log('inside fortune')
    // get random data
    let fortuneData = getRandomFortune()
    res.render('fortune', fortuneData)
}),

// define the about route
router.get('/about', function (req, res) {
    res.send('About fortune')
})

router.get('/:fortuneId/', function (req, res) {
    // get random data
    let fortuneData = getFortune(req.params['fortuneId'])
    res.render('fortune', fortuneData)
}),

module.exports = router