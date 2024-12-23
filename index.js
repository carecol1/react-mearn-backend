const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConecction } = require("./database/config");

//create server
const app = express();

//base de datos
dbConecction();

//CORS
app.use(cors());

//Public Directory
app.use(express.static("public"));

//lectura y parseo del body
app.use(express.json());

//routes
//auth
app.use("/api/auth", require("./routes/auth"));
//events
app.use("/api/events", require("./routes/events"));
//CRUD

//listen petition
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${4000}`);
});
