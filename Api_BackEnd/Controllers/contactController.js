const Contact = require("../Model/contact")

exports.getAllContact     =(req , res) =>{
   
    Contact.find()
    .sort('-')
    .exec((error , data)=>{
        if(error && !data)
        {
            res.status(400).send(error)
        }

        res.json(data)
    })

    

}