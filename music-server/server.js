const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/music-routes');

const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/music',router);
mongoose.connect("mongodb+srv://anjanprasad112:a0zDJ7ESYOmxDXmM@cluster0.k0ddy8s.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("Connected to database!");
}).then(() => {
app.listen(5000);
console.log("http://localhost:5000");
})
.catch((err) => {
    console.log("Connection failed! " + err);
});
