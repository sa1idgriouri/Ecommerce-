import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../Router/helpers'
import { useTranslation } from "react-i18next";
 const footer =(Name)   =>{
  
       if(!isAuthenticated() || isAuthenticated().user.role===0)
       {
       
         return(
          <>
        
          <footer className="page-footer font-small elegant-color mt-5">
            <div className="color-primary">
              <div className="container">
          
                <div className="row py-4 d-flex align-items-center">
               
                  <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                    <h6 className="mb-0">{Name}</h6>
                  </div>
                
                  <div className="col-md-6 col-lg-7 text-center text-md-right">
                 
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
           
            <div className="container-fluid text-center  ba text-md-left pt-4 pt-md-5">
           
              <div className="row mt-1 mt-md-0 mb-4 mb-md-0">
       
                <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
             
                  <h5>About me</h5>
                  <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60" />
                  <p className="foot-desc mb-0">Here you can use rows and columns to organize your footer content. Lorem
                    ipsum dolor sit amet,
                    consectetur
                    adipisicing elit.</p>
                </div>
         
                <hr className="clearfix w-100 d-md-none" />
                
                <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
                
                  <h5>Products</h5>
                  <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60" />
                  <ul className="list-unstyled foot-desc">
                    <li className="mb-2">
                      <Link to="#">Laptop</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="#">Mobile</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="#"></Link>
                    </li>
                    <li className="mb-2">
                      <Link to="#"></Link>
                    </li>
                  </ul>
                </div>
              
                <hr className="clearfix w-100 d-md-none" />
               
                <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
               
                  <h5>Useful links</h5>
                  <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60" />
                  <ul className="list-unstyled foot-desc">
                    <li className="mb-2">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/services">Services</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="">blog</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="">Contact</Link>
                    </li>
                  </ul>
                </div>
               
                <hr className="clearfix w-100 d-md-none" />
              
                <div className="col-md-3 mx-auto mt-md-0 mb-0 mb-md-4">
               
                  <h5>Contacts</h5>
                  <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60" />
                  <ul className="fa-ul foot-desc ml-4">
                    <li className="mb-2"><span className="fa-li"><i className="far fa-map" /></span>240LOT RIAD NACER TIZNIT
                    </li>
                    <li className="mb-2"><span className="fa-li"><i className="fas fa-phone-alt" /></span>+2126787752624</li>
                    <li className="mb-2"><span className="fa-li"><i className="far fa-envelope" /></span></li>
                    <li><span className="fa-li"><i className="far fa-clock" /></span>Monday - Friday: 10-17</li>
                  </ul>
                </div>
              
              </div>
             
            
            </div>
            <div className="footer-copyright text-center py-3">© 2021 Copyright:
              <a href="https://mdbootstrap.com/"> Poco mega Store</a>
            </div>
          
            
          </footer>
         
          </>
     
           )
       }

 }



const Footer = () => {
  const {t} = useTranslation()
  const name =t("Get_connected");
    return (
   
            <>
         {footer(name)}
</>
            
        
    )
}

export default Footer
