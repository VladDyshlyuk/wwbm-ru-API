const app = require('express')();
const PORT = 8080;
var questionsRepository = require('./questionsRepository');

const cors = require('cors');

const allowedOrigins = ["*"];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                var msg =
                    "The CORS policy for this site does not " +
                    "allow access from the specified Origin.";
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        }
    })
);

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
