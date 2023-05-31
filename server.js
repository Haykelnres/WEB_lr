
const express = require("express");
const http = require("http"); 
const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var app = express()
http.createServer(app).listen(3000);
app.use(express.static(__dirname + "/lr7"));
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://0.0.0.0:27017/Flights", { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('db connected...');
        })
        .catch(() => {
            console.log('bad connection...');
        });

var Klient = mongoose.model("Klient", new Schema({
    description: String,
    tags: [ String ]
}));

app.get("/klients", async (req, res) => {
    await Client.find()
                .then(async (Klients) => {
					res.json(Klients);
				})
				.catch((err) => {
					console.log(err);
				});
});

app.post("/klients", async (req, res) => {
	console.log(req.body);
	let newKlient = new Klient({
        "description": req.body.description, 
        "tags": req.body.tags
    });
	
	await newKlient.save()
                   .then(async (result) => {
                       await Klient.find()
                           .then(async (result) => {
                               res.json(result);
                           })
                           .catch(async (err) => {
                               res.send(err);
                           });
                   })
                   .catch(async (err) => {
                       console.log(err);
                       res.send("ERROR");
                   });
});