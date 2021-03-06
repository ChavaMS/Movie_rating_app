const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const router = express.Router();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

//Conexion a mongodb
mongoose.connect('mongodb://localhost/movie_rating_app', function () {
    console.log("Conexion realizada");
}).catch(err => {
    console.error("Error iniciando App: ", err.stack);
    process.exit(1);
});

//Incluir controladores
fs.readdirSync("controllers").forEach(function (file) {
    if (file.substr(-3) == ".js") {
        const route = require("./controllers/" + file);
        route.controller(app);
    }
});

router.get('/', function (req, res) {
    res.json({ message: 'API inicializada' });
});

const port = process.env.API_PORT || 8081;
app.use('/', router);
app.listen(port, function () {
    console.log("api correindo en el puerto $(port)");
})