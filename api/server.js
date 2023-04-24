const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mern-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to DB"))
    .catch(console.error);

const User = require('./routes/User')
app.use('/plot', User);

const Today = require('./routes/Today');
app.use('/today', Today);

const Month = require('./routes/Month');
app.use('/month', Month);

const Week = require('./routes/Week');
app.use('/week', Week);

app.listen(3001, () => console.log("Server started on port 3001"));