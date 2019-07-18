let express = require("express");
let app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ("OPTIONS" === req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});



app.use(express.static("landing_page"));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/landing_page/index.html');
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/landing_page/index.html')
})

let listener = app.listen(9001);

console.log("Listening on port-->> " + listener.address().port);