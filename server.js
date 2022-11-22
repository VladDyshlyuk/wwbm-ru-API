const app = require('express')();
const cors = require('cors');
const PORT = 8080;
var questionsRepository = require('./questionsRepository');


app.options('*', cors());

app.listen(
    PORT,
    () => console.log(`it's alive on ${PORT}`)
);

app.get('/questions/:dif?/:num?', function (req, res) {
    res.send(questionsRepository.getRandom(req.params.num || 1, req.params.dif || 1));
});
