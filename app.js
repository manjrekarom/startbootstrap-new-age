const express = require('express')
const app = express()

// routers
const fortune = require('./routes/fortune')

const exphbs  = require('express-handlebars');
const PORT = 3000

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use('/fortune', fortune)

app.listen(PORT, () => console.log('App listening on port' + PORT + '!'))
