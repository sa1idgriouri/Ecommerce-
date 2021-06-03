const mongoose = require('mongoose');
const  { v1 : uuid} = require ('uuid');
const crypto = require("crypto");

const schemaUser= mongoose.Schema({
     name : {
         type: String ,
         maxlength : 30,
         required  : true,
          trim     : true
     },

     email : {
         type : String ,
         maxlength : 50,
         required : true,
         trim  : true,
         unique : true
     },

     hash_Password : {
        type : String ,
        required  : true,
        trim     : true

     },

     slat :{
         type : String ,

     },
     about : {
         type : String,
         trim  : true
     },
     history : {
         type : Array,
         default : []
     },
     role : {
         type :Number,
         default : 0
     }
}, {timestamps : true});


schemaUser.virtual('password')
.set(function(password){
 this._password = password
 this.slat   = uuid()
 this.hash_Password = this.crtyptPassword(password)

})
.get(function(){
    return this._password
})



schemaUser.methods = {
    authenticate: function(plaintext)
    {
        return this.crtyptPassword(plaintext) === this.hash_Password
    },
    crtyptPassword : function(passowrd){
        if(!passowrd) return ''

        try{
            return  crypto  
            .createHmac('sha1', this.slat)
            .update(passowrd)
            .digest('hex');
        }
        catch(x)
        {
             return ''
        }
    }
}


module.exports = mongoose.model("User" , schemaUser);