const express = require('express')
const mongoose= require('mongoose')
const {config}=require('dotenv')
const bodyParser= require('body-parser')
config()

const bookRoutes= require('./routes/book.routes')

//usamos express para los middleware
const app= express();
app.use(bodyParser.json())// parseador de bodies

//aca conectamos la base de datos
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connection;

app.use('/books', bookRoutes)


//conectaremos la base de datos
const port = process.env.PORT||3000

app.listen(port, ()=>{
    console.log(`Servidor iniciado en el puerto ${port}`)
})
