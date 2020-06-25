const express = require('express');
const dotenv = require ('dotenv');
const cors = require ('cors');
const mongoose = require('mongoose');

dotenv.config({path: './config/config.env'});


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected to MongoDB database");
});

const studyRouter= require('./routes/usersStudy');
const usersRouter= require('./routes/users');


app.use('/users', usersRouter);
app.use('/usersStudy',studyRouter);



app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));


