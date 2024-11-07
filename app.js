const express = require('express');
require('dotenv').config()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const products = require("./routes/products")

app.use("/products", products)

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.qt5e6kf.mongodb.net/?appName=Cluster0`)
.then(() => {
    console.log('connected to mongodb');
})
.catch((err) => {
    console.log(err);
})

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});