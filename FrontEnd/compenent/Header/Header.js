import React   from 'react'
import './style.css'
import{Link , withRouter}  from 'react-router-dom'
import {API_URL} from '../../config/config'
import toastr from 'toastr';
import 'toastr/build/toastr.css'
import {isAuthenticated} from  '../Router/helpers'
import Menu from './Menu';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";





const Header  = (props)  => {
   const {t} = useTranslation();
   const countItmes = useSelector(state => state.cart.conut)
   let itemsprodact = useSelector(state =>state.cart.prodact)
  const signOut     =()=>{
    if(isAuthenticated() && isAuthenticated().user.role===0)
    {
      return (
        <ul className="navbar-nav ml-auto ">
        <li className="nav-item active">
     
          <Link className="nav-link" to="/">{user.name} <span className="sr-only">(current)</span>
        
          </Link>
    
         </li>
      
       

     

 

  <div className="dropdown" style={{marginRight : '20px ' }}>
  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <img width="30" src="/assets/avatar.svg" alt="" />
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link className="dropdown-item" to="/Dashbord">View Dashbord</Link>
    <Link className="dropdown-item" to="/profileuser">Profile</Link>
 
    <div className="dropdown-divider" />
    <Link className="dropdown-item" href="#"><span  onClick={signout} >SignOut <span className="sr-only">(current)</span></span></Link>
  </div>
</div>


  
        
    </ul>
        
      )
    }
  }

   const total =()=>{
    return itemsprodact.reduce((total , prodcat)=> total+(prodcat.price * prodcat.Count) ,0)
}
 

 
  const {user} = isAuthenticated();
  const signout  = ()=>{
      fetch(`${API_URL}/signout`)
      .then(() => {
        toastr.info("User SignOut " , 'I see next time')
       
         localStorage.removeItem("JWT_INFO")
        props.history.push("/signin")
        
      })
    

      .catch(err =>toastr.error(err))

  }

  const Ma =() =>{
    if(!isAuthenticated() || isAuthenticated().user.role===0)
    {

      return(
     
       <>
       <div className="header_main">
         <div className="container">
           <div className="row">
             {/* Logo */}
             <div className="col-lg-2 col-sm-3 col-3 order-1">
               <div className="logo_container">
                 <div className="logo"><Link to="#"><img src="/assets/logo3.svg"/></Link></div>
               </div>
             </div> {/* Search */}
             <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
               <div className="header_search">
                 <div className="header_search_content">
                   <div className="header_search_form_container">
                    
                   </div>
                 </div>
               </div>
             </div> {/* Wishlist */}
             <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
               <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                 <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                   <div className="wishlist_icon"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png" alt="" /></div>
                   <div className="wishlist_content">
                     <div className="wishlist_text"><Link to="#">{t("Menu_like")}</Link></div>
                     <div className="wishlist_count">10</div>
                   </div>
                 </div> {/* Cart */}
                 <div className="cart">
                   <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                     <div className="cart_icon"> 
                     <Link to="/checkout">
                     <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png"  alt="" /></Link>
                       <div className="cart_count"><span>{countItmes}</span></div>
                     </div>
                     <div className="cart_content">
                       <div className="cart_text"><Link to="/checkout">{t("Menu_Cart")}</Link></div>
                       <div className="cart_price">${total()}</div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div> 
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                     <div className="container">
                     <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <i className="fas fa-bars" />
                       </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ">
                        <li className="nav-item active">
                          <Link className="nav-link" to="/">{t("Menu_H")} <span className="sr-only">(current)</span></Link>
                        </li>

                        <li className="nav-item active">
                          <Link className="nav-link" to="/shop">{t("Menu_Sh")} <span className="sr-only">(current)</span></Link>
                        </li>

                        <li className="nav-item active">
                          <Link className="nav-link" to="/contact">Service <span className="sr-only">(current)</span></Link>
                        </li>

                        <li className="nav-item active">
                          <Link className="nav-link" to="/blog">{t("Menu_B")}  <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                          <Link className="nav-link" to="/contact">{t("Menu_C")} <span className="sr-only">(current)</span></Link>
                        </li>
                        
                        {isAuthenticated() &&  isAuthenticated().user.role===1 &&(
                        <li className="nav-item active">
                          <Link className="nav-link" to="/admin/Dashbord">Dashbord<span className="sr-only">(current)</span></Link>
                        </li>
                        )}
                        
                    </ul>

      
                         {signOut()}

                  

                
                   </div>

                     </div>
                 
               </nav>
               
       </>

      )
   

    }
       

  }

 
 
    return (
    
        <div className="super_container">
        {/* Header */}
        <header className="header">
              
                   <Menu />
     
              {Ma()}
              
              
  
        </header>

      
        
       
        
      </div>
      
           
     
      
       












            
       
    )
}

export default withRouter( Header)
