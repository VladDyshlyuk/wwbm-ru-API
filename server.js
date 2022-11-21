const app = require('express')();
const PORT = 8080;

var questionsRepository = require('./questionsRepository');

app.listen(
    PORT,
    () => console.log(`it's alive on ${PORT} port`)
)

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/questions/:dif?/:num?', function (req, res) {
    res.send(questionsRepository.getRandom(req.params.num || 1, req.params.dif || 1));
});
