const mongoose = require('mongoose');
 var {ObjectId} = mongoose.Schema



const schemaProdact = mongoose.Schema({
      name : {
          type: String,
          maxLength  : 100 ,
          trim  : true ,
          required : true
      },

      description : {
        type: String,
        maxLength  : 2000 ,
        trim  : true ,
        required : true
    },
    price :{
        type :Number ,
        required : true
    },
    Qauntity : {
        type :Number
    } ,

    photo :{
        data : Buffer ,
        contentType :String
    } ,
    category:{
        type :ObjectId ,
        ref : 'Category',
        required : true
        
    } ,
    shopping :{
        type : Boolean ,
        required : false,
        default : false
        
    },
    sold : {
        type:Number,
        default:0
    }





} ,{timestamps : true})


module.exports = mongoose.model("Prodact" , schemaProdact);