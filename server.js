var express = require("express"),
    http = require("http"),
    app = express(),
    klients = [
    {
    "description" : "Вавилов С.И. 21.08.2023",
    "tags" : [ "билет", "клиент" ]
    },
    {
    "description" : "Сарманов С.И. 21.09.2023",
    "tags" : [ "билет", "клиент" ]
    },
    {
    "description" : "Головенко Э.Э. 13.11.2023",
    "tags" : [ "билет", "клиент" ]
    },
    {
    "description" : "s7 airlines",
    "tags" : [ "партнеры", "авиакомпании" ]
    },
    {
    "description" : "Ural airines",
    "tags" : [ "партнеры", "авиакомпании" ]
    },
    {
    "description" : "Turkish airlines",
    "tags" : [ "партнеры", "авиакомпании" ]
    }
    ];
    

app.use(express.static(__dirname + "/lr7"));
http.createServer(app).listen(3000);
app.use(express.urlencoded({extended: true}));

app.get("/klients", function(req, res) {
    res.json(klients);
})

app.post("/klients", function (req, res) {
    var newKlient = req.body;
    klients.push(newKlient);
});