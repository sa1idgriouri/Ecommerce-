import React , {useEffect , useState} from 'react'
import {Link} from 'react-router-dom'
import { API_URL } from '../../config/config';
import { isAuthenticated } from '../Router/helpers'
import toastr from 'toastr';
import 'toastr/build/toastr.css'

function EditeCategory(props) {

    const CategoryID = props.match.params.idCat
    const [name , setName]= useState('');

const Handeltchange = e  =>{

      setName(e.target.value)
}
   
    const getOneCategory  =() => {
           fetch(`${API_URL}/category/${CategoryID}` ,{
                method :"get",
                headers : {
                    "Content-Type": "application/json"
                }
           } )
           .then(res =>res.json())
           .then(res =>setName(res.category))
           .catch(err =>console.log(err))

     }

     //
     

     const UpadateCategory =(e)=>{

        e.preventDefault()
        const {user ,token} = isAuthenticated();

         fetch(`${API_URL}/category/${CategoryID}/${user._id}` , {
            method : "put" ,
            headers : {
                "accept" : "application/json",
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
                },
                body  : JSON.stringify({name})
              
               })
             .then(res=>res.json())
             .then(res=> {
                 if(res.error)
                 {
                    toastr.warning(res.error , "Please  Check  Form !")
                 }
                 else
                 {
                    toastr.success("Category is Update SuccessFully " , 'Update Category')
                    props.history.push('/admin/category')
                 }
                
                
             })
             .catch(err => toastr.error("Problem server " , 'Try agien'))
     }

     useEffect(() =>   getOneCategory() ,[])

    return (
        <div>
               <h1 > Update Category</h1>
            <Link to='/category'>
                <button className ="btn btn-primary"><i className="fas fa-step-backward my-3 "></i>  Go To all Category</button>
            </Link>
            <hr />
            <form onSubmit={UpadateCategory}  >
                 <div className="form-group">
                     <label htmlFor="name">Name Category</label>
                     <input 
                     type="text"
                     name="name"
                     className="form-control"
                     placeholder="Add name category"
                     autoFocus
                     onChange= {Handeltchange}
                     required 
                     value ={name.name}
                   
                     >    
                     </input>
                 </div>

                 <button type="submit" className="btn btn-outline-warning btn-block">Upadete   Category</button>

            </form>
        
        </div>
    )
}

export default EditeCategory
