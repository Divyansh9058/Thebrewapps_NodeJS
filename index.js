const express = require("express");

const {connection} = require("./Configs/db");
const {bookRouter} = require("./Routes/books.routes");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use("/book",bookRouter)

app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log("Connected to DataBase")
    } catch (error) {
        console.log(error.message)
    }
    console.log(`Sever is running at ${process.env.PORT}`)
});