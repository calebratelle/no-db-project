import express from "express";
import morgan from "morgan";
import ViteExpress from 'vite-express';
import handlerFunctions from "./controller.js";

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(express.json())

//Routes Go Here

const {getInvoices, addItem, deleteItem, updateItem} = handlerFunctions

app.get('/invoice', handlerFunctions.getInvoices)
app.post('/addInvoice', addItem)
app.delete('/removeInvoice/:id', deleteItem)
app.put('/editInvoice/:id', updateItem)

// Open up door to server
ViteExpress.listen(app, 2319, () => console.log("We've got a 2319! Report to http://localhost:2319"))
