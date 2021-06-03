const mongoose = require('mongoose');


const schemaCategory = mongoose.Schema({
      name : {
          type: String,
          maxLength  : 100 ,
          trim  : true ,
          required : true,
          unique:true
      }

} ,{timestamps : true})


module.exports = mongoose.model("Category" , schemaCategory);