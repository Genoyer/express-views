var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (request, response, next) => {
    let data = {
        name: "Drake Stan",
        affiliation: "from the 6"
    };
    response.render('index', data);
});

app.get('/about', (request, response, next) => {
    response.render('about');
});

app.get('/cities', (request, response, next) => {
    let data = {
        name: "Drake Stan",
        cities: ["Miami", "Madrid", "Paris", "Amsterdam", "London"]
    };
    response.render('cities', data);
})

app.listen(3000, () => {
    console.log("LIVE");
});