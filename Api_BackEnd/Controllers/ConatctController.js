const Contact = require("../Model/contact");

exports.contact = (req , res)=>{

    const contact = new Contact(req.body);
    
    
    contact.save((err , contact)=>{
     if(err)
     {
        return  res.status(400).send( {error :err} )

     }
       
     

      res.json(contact);
    })
    }


    exports.getAllContact     =(req , res) =>{
   
      Contact.find()
      .sort({createdAt :-1 })
      .exec((error , data)=>{
          if(error && !data)
          {
              res.status(400).send(error)
          }
  
          res.json(data)
      })
  
      
  
  }

  exports.contactId = (req , res , next , id)=>{

   Contact.findById(id)
   .populate('user' , '_id name , email')
   .exec(function (err , contact) {
       if(err || !contact)
       {
         res.status(404).json({message : "Order not found !"});
       }
       
       req.contact = contact;
       
       next();
   })
}


exports.removecontact= (req ,res )=>{
   let contact = req.contact
   Contact.remove(contact ,(err , contact)=>{
     if(err)
     {
       return res.status(400).json({message : "Contact not delete"})
     }
      
      res.status(202).send({message : "Contact delete" });
   })
 
 }