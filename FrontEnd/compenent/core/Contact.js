import React , {useState} from 'react'
import {API_URL} from '../../config/config'
import toastr from 'toastr';
import 'toastr/build/toastr.css'
import { Link } from 'react-router-dom';
function Contact() {

    const [contacts , setConatct]  = useState({
    name :"",
    email :"",
    message :""
    })

    const handlhange    =(e)=>{
          setConatct({...contacts , [e.target.id] :e.target.value})

    }

    const onSbmitContact =(e)=>{
        e.preventDefault()
        

         fetch(`${API_URL}/contact/` , {
            method : "Post",
            headers : {
                "Content-Type" : "application/json"
               
                },
                body  : JSON.stringify(contacts)
                
              
               })
             .then(res=>res.json())
             .then(res=> {

                 if(res.errors)
                 {
                     return toastr.warning(res.errors , "Please  Check  Form !")
                 }
                 else
                 {
                    toastr.success("send message  SuccessFully "  )
                   
                      setConatct({
                        name :"",
                        email :"",
                        message :""

                      })

                     
                   
                     
                 }
              
                 
                
             })
             .catch(err => toastr.error( err , "Problem server " , 'Try agien'))
    }
    return (

       
        <div>
                    <div className="jumbotron jumbotron-fluid">
                       <div className="container">
                          <h1 className="display-4">Conatct</h1>
                        
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card9">
                                     <h3>Telephone</h3>
                                     <i class="fas fa-phone-alt fa-2x"></i>   <span>0678752624</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <div className="card9">
                                     <h3>Email </h3>
                                     <i className="fas fa-envelope fa-2x"></i> <span>Saidgriouri@gmil.com</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <div className="card9">
                                     <h3>Réseaux sociaux</h3>
                                     <Link to="#" className="fb-ic">
                                        <i className="fab fa-facebook-f white-text mr-4"> </i>
                                        </Link>
                                    
                                        <Link to="#" className="tw-ic">
                                        <i className="fab fa-twitter white-text mr-4"> </i>
                                        </Link >
                                    
                                        <Link to="#" className="gplus-ic">
                                        <i className="fab fa-google-plus-g white-text mr-4"> </i>
                                        </Link>
                                    
                                        <Link to="#" className="li-ic">
                                        <i className="fab fa-linkedin-in white-text mr-4"> </i>
                                        </Link >
                                    
                                        <Link to="#" className="ins-ic">
                                        <i className="fab fa-instagram white-text"> </i>
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 mt-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.4397475886476!2d-9.58972501445328!3d30.423633607515985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b70206903735%3A0xa2c8c0305a304422!2sAgadir%20centre%20ville!5e0!3m2!1sar!2sma!4v1618235786922!5m2!1sar!2sma" width={"100%"} height={450} style={{border: 0}} allowFullScreen loading="lazy" />
                            </div>
                            <div className="col-md-4 mt-5">
                            <form onSubmit={onSbmitContact}>
                            <div className="Form-group">
                                <label htmlFor="name">Nom</label>
                                <input onChange={handlhange} value={contacts.name} type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter email" />
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input onChange={handlhange}  value={contacts.email} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                
                            </div>
                            <div className="form-group">
                            <label htmlFor="email">Message </label>
                               <textarea onChange={handlhange}  className="form-control" cols="20" id="message" value={contacts.message} rows="10"></textarea>
                            </div>
                            
                            <button  className="btn btn-raised btn-info">Send Message</button> 
                            </form>
                           

                            </div>
                        </div>
                    </div>
              
        </div>
    )
}

export default Contact
