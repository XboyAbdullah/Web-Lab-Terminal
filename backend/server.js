const app = require('./app')
const connectDatabase = require('./database');
const dotenv = require('dotenv');


// setting up config file
dotenv.config({path: 'backend/config.env'});

// connecting to database
connectDatabase();


const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})



