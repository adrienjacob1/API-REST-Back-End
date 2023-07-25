const express = require("express");
const cors = require("cors");
const morgan =require("morgan");

const router = require("./router");
const routerV2 = require("./routerV2");

// L'application utilise le framework express donc on importe la suite
const app = express();

// Configurer les en-têtes : 1 - CORS avec package
//app.use(cors())

// Configurer les en-têtes : 2 - CORS, Méthodes, autres headers sans package
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

//Formater les infos dans le console log
app.use(morgan("combined"));

// Parser les données des requetes entrantes 
app.use(express.json());

//Exemple de reponse simple a une requete GET
app.get("/", (req, res) => res.json("Hellow world!"));

// Utilisation du router V1
app.use("/api/v1", router);

// Test API V2
app.use("/api/v2", routerV2);

// Exemple erreur 404
app.use((req, res) => res.status(404).json({ error: "Page not found!"}));

module.exports = app;