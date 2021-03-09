const express = require ("express");
const path = require ("path");
const app = express();
const morgan = require("morgan");
const mysql = require("mysql");
const myConnection = require("express-myconnection");

//importing routes
const propietariosRoutes = require("./routes/propietarios");

//setings
app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlerwares
app.use(morgan("dev"));
app.use(myConnection(mysql, {
    host:"localhost",
    user:"root",
    password: "talleres12",
    port: 3306,
    database: "inmobiliaria"
}, "single"))
app.use(express.urlencoded({extended:true}));
//routes

app.use("/", propietariosRoutes)

//statics files
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () =>{
    console.log('Server on port 8080');
});