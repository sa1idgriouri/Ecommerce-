import React   ,{useState} from 'react'
import './signin.css'
import {API_URL} from '../../config/config'
import toastr from 'toastr';
import 'toastr/build/toastr.css'
import {Link} from "react-router-dom"
import { useTranslation } from "react-i18next";



const  Signup =(props)  =>{
  const {t} = useTranslation();
    const [user, setuser] = useState({
        name : "" ,
        email : "",
        password : ""
    })

    const HandleHange  =(e)=>{
        setuser({...user , [e.target.id ] :e.target.value })
    }

    const OnsubmitSignup = e =>{
       e.preventDefault();
       fetch(`${API_URL}/signup` , {
           method : "Post" ,
           headers : {
               "accept" : "application/json",
               "Content-Type" : "application/json"
              
           },
           body : JSON.stringify(user)
       })
       .then(res => res.json())
        .then(res => {
          if(res.errors) {
             toastr.warning (res.errors , "Please  Check  Form !")
          }
          else
          {
            toastr.success("User is created SuccessFully " , 'New Accont')
            props.history.push('/signin')
          }
        } )
       .catch((err)=> toastr.error("Problem server " , 'Try agien'))

    }
  

    const form =() =>(
  <div className="col-lg-10 col-xl-9 mx-auto">
      <div className="card card-signin flex-row my-5">
        <div className="card-img-left d-none d-md-flex">
         <img  className="bc" src= "/assets/undraw_personal_information_re_vw8a.png" alt="regester"/>
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{t("login")}</h5>
          <form onSubmit={OnsubmitSignup} className="form-signin">
            <div className="form-group">
             <label htmlFor="name">{t("Username")}</label>
              <input onChange={HandleHange} type="text" id="name" className="form-control" placeholder={t("Username")}   />
              
            </div>
            <div className="form-group">
            <label htmlFor="email">{t("Email_addaress")}</label>
              <input onChange={HandleHange} type="email" id="email" className="form-control" placeholder={t("Email_addaress")}  />
              
            </div>
            <hr />
            <div className="form-group">
            <label htmlFor="password">{t("Password")}</label>
              <input onChange={HandleHange} type="password" id="password" className="form-control" placeholder={t("Password")} />
              
            </div>
 
            <button className="btn btn-lg btn-outline-primary btn-block text-uppercase" type="submit">Register</button>
            <Link className="d-block text-center mt-2 small" to="#">{t("login_title")}</Link>
            <hr className="my-4" />
            <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2" /> {t("Google")}</button>
            <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2" /> {t("Facebook")}</button>
          </form>
        </div>
      </div>
  
    </div>



    )
    return (
        <div>
             <div className="container">
                 <div className="row">
                  { form() }
                  
                 </div>
             </div>
        </div>
    )
}

export default Signup
