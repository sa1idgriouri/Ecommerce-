const { trim } = require('lodash')
const mongoose = require('mongoose')

const schemaContact  = mongoose.Schema({
    name :{
          type:String,
          required : true,
          trim  :true
    },
    email :{
        type:String,
        required : true,
        trim  :true
    },

    message :{
        type :String,
        required:true,
        trim  :true
    }

},{timestamps : true})

module.exports = mongoose.model('Contact' , schemaContact)