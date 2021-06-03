import React from 'react'
import {isAuthenticated} from  '../Router/helpers'
import{Link }  from 'react-router-dom'
import  ChengeLanguge from '../core/ChengeLanguge'
import { useTranslation } from "react-i18next";

const Menu =()  =>{
  const {t} = useTranslation();

  const info =() =>{

    if(!isAuthenticated() || isAuthenticated().user.role===0)
    {
      return  (
        <>
                 <div className="top_bar">
            <div className="container">
              <div className="row">
                <div className="col d-flex flex-row">
               
             
                <div className="top_bar_contact_item">
                      <div className="top_bar_icon"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918577/phone.png"  alt="" /></div>+212 6 78 75 26 24
                      </div>
              
                      <div className="top_bar_contact_item">
                      <div className="top_bar_icon"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918597/mail.png" alt=""  /></div><Link to="mailto:fastsales@gmail.com">saidgriouri@gmail.com</Link>
                      </div>
                    
                  <div className="top_bar_content ml-auto">
                  
                    <div className="top_bar_user">
                   
                      {!isAuthenticated() && (
                        <>
                        <div className="user_icon"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918647/user.svg"  alt="" /></div>
                        <div><Link to="/signup">{t("login")}</Link></div>
                        <div><Link to="/signin">{t("signin")}</Link></div>
                        </>

                      )}
                  
                    </div>
              
                  </div>
                  <ChengeLanguge />
                </div>
              </div>
            </div>
          </div> 

       </>
      )
    }


}

 
    return (
        <div>
             {info()}
        </div>
    )
}

export default Menu
