const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const routes = require("./routes/ToDoRoutes")
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 6000;

//Middle Ware 
app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected ..."))
    .catch((error) => { console.log(error) });

app.use("/api", routes);
   

app.listen(PORT, () => { console.log(`Listening at ${PORT}...`) })
