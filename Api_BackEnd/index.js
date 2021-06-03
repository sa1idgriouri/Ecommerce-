const express= require("express");
const app = express();
const mongooose= require("mongoose");
const Validator = require('express-validator');
var cookieParser = require("cookie-parser");
const Cors    = require('cors');

// config dotenv
require('dotenv').config();


// Router
const authRouter = require('./Router/auth');
const usersRouter = require('./Router/users');
const categoryRouter = require('./Router/category');
const prodactRouter = require('./Router/prodact');
const braintreeRouter = require('./Router/braintree');
const orderRouter = require('./Router/order');
const contactRouter = require('./Router/conatct');

//connect databse mongodb
mongooose.connect(process.env.DATABASE , 
        {
          useNewUrlParser: true,
          useCreateIndex : true, 
          useUnifiedTopology  : true
         }   
    
    )
.then(()=>console.log("le database is connected"))
.catch((err)=>console.log("le database ne pas connected"))


//Medllwer 
app.use(express.json());
app.use(Cors());
app.use(cookieParser());
app.use(Validator());




// Midllwer Router
app.use('/api' , authRouter);
app.use('/api/user' , usersRouter);
app.use('/api/category' , categoryRouter);
app.use('/api/prodact' , prodactRouter);
app.use('/api/braintree' , braintreeRouter);
app.use('/api/order' , orderRouter);
app.use('/api/contact' , contactRouter);



const port = process.env.PROT || 3000
app.listen(port , ()=> console.log(`app is runnig  in Prot  ${port}` ));


