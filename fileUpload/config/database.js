    const mongoose = require('mongoose');
    const dotenv = require('dotenv');
    dotenv.config();
     const dbConnect =  () => {
         mongoose.connect(process.env.MONGO_URL, {
                useNewUrlParser: true,  
                useUnifiedTopology: true,
            })
           .then( console.log("Database connected successfully"))
           .catch((err) => {
               console.log("Database connection failed", err);
           });    

    }
    module.exports = dbConnect;
        