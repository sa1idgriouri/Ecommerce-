import React , {useState} from  'react'
import { API_URL } from '../../config/config'
import { isAuthenticated } from '../Router/helpers'
import toastr from 'toastr';
import 'toastr/build/toastr.css'
import {Link} from 'react-router-dom'


function Category() {
    
    
    const [name, setName] = useState('')

    const Handeltchange =(e)=>{
          
        setName(e.target.value)
    }

   

    const onSbmitcategory =(e)=>{
        e.preventDefault()
        const {user ,token} = isAuthenticated();

         fetch(`${API_URL}/category/create/${user._id}` , {
            method : "Post" ,
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
                    toastr.success("Category is Create SuccessFully " , 'new Category')
                 }
                 setName('')
                
             })
             .catch(err => toastr.error("Problem server " , 'Try agien'))
    }

 

    return (
        <div>
            <h1 > Add New Category</h1>
            <Link to='admin/category'>
                <button className ="btn btn-primary"><i className="fas fa-step-backward my-3 "></i>  Go To all Category</button>
            </Link>
            <hr />
            <form onSubmit={onSbmitcategory}>
                 <div className="form-group">
                     <label htmlFor="name">Name Category</label>
                     <input 
                     type="text"
                     className="form-control"
                     placeholder="Add name category"
                     autoFocus
                     onChange= {Handeltchange}
                     required 
                     value= {name}
                     >    
                     </input>
                 </div>

                 <button type="submit"  className="btn btn-outline-primary">Add new Category</button>

            </form>
            
        </div>
    )
}

export default Category
