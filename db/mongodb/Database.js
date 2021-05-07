const mongoose = require('mongoose');

function connectionDB() {

    //comment out on local
    mongoose.connect(`${process.env.MONGOURI}`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
   

    //test db connection
    // mongoose.connect(`mongodb+srv://${process.env.TESTDBUSER}:${process.env.TESTDBPASSWORD}@cluster0.ro5ct.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    

    //live db connection
    //mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cribmddb-ndzu0.mongodb.net/production?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

    //check error in db connection
    mongoose.connection.on('error', function() {
        console.error.bind(console, 'connection error')
    })

    //log successful db connection
    mongoose.connection.once('open', function() {
        console.log('Database connection was successful')
    })

}

exports.connectionDB = connectionDB;
