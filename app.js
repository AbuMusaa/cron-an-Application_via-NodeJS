const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

// set the view engine to ejs
app.set('view engine', 'ejs')

app.use(express.static('public'))


// contact page route
app.get('/contact', (req, res) => {
    res.render('pages/contact')
    console.log('Visited Contact page');
})

// blog page route
app.get('/blog', (req, res) => {
    res.render('pages/blog')
    console.log('Visited Blog page');
})

// service page route
app.get('/service', (req, res) => {
    res.render('pages/service')
    console.log('Visited Service page');
})

//about page route
app.get('/about', (req, res) => {
    res.render('pages/about')
    console.log('Visited About page');
})

// main page route
app.get('/', (req, res) => {
    res.render('pages/index')
    console.log('Visited Home page');
})

app.listen(4040, () => {
    console.log('Application is Running in PORT: 4040');
})