// cloud storage variables and connections


// declarations
require('dotenv').config();
const {PORT, ENVIRONMENT} = process.env;
const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); // cors require
const bodyParser = require('body-parser');
// db connection
const db = require('./configs/db.config');

// routes import
const flasherRoutes = require('./routes/flasherRoutes');
const { response } = require('express');

const app = express();

// middleware setup
app.use(cors()) // CORS middleware useage
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());



// routes

app.use('/api', flasherRoutes(db))

app.get('/', (req, res) => {
	res.json({greetings: 'hello world'});
})

// cloud image storage routes


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));