const app = require('express')();
const PORT = 8080;
var questionsRepository = require('./questionsRepository');
const cors = require('cors');

app.options('*', cors())

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(
    PORT,
    () => console.log(`it's alive on ${PORT}`)
);

app.get('/questions/:dif?/:num?', function (req, res) {
    res.send(questionsRepository.getRandom(req.params.num || 1, req.params.dif || 1));
});
