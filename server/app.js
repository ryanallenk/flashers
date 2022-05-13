// declarations
require('dotenv').config();
const {PORT, ENVIRONMENT} = process.env;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// db connection
const db = require('./configs/db.config');

// routes import
const flasherRoutes = require('./routes/flasherRoutes')

const app = express();

// middleware setup
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());


app.use('/climbs', flasherRoutes())

app.get('/', (req, res) => {
	res.json({greetings: 'hello world'});
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));